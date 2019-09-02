
class MyPromise {

  constructor(fn) {
    this.result;
    this.fullFilled = false;
    this.rejected = false;
    this.pendingSuccess = [];
    this.pendingError = [];
    try {
      fn(
        this.resolve.bind(this),
        this.reject.bind(this)
      )
    } catch(e) {
      this.reject(e);
    }
  }

  runListener(type, result) {
    setTimeout(() => {
      if(type === 'error') {
        this.pendingError.forEach(fn => fn(result));
        this.pendingError = [];
      } else {
        this.pendingSuccess.forEach(fn => fn(result));
        this.pendingSuccess = [];
      }
    })
  }

  resolve(result) {
    if(this.fullFilled || this.rejected) 
      return console.error('已调用resolve/reject');
    this.fullFilled = true;
    this.result = result;
    this.runListener('success', result);
  }

  reject(e) {
    if(this.fullFilled || this.rejected) 
      return console.error('已调用resolve/reject');
    this.reject = true;
    this.result = e;
    this.runListener('error', e);
  }

  then(fn1, fn2) {
    const that = this;
    return new MyPromise((resolve, reject) => {

      const errorCallBack = (result) => {
        try {
          reject(fn2(result));
        } catch(e) {
          reject(e);
        }
      }

      const successCallBack = (result) => {
        try {
          resolve(fn1(result))
        } catch(e) {
          reject(e)
        }
      }

      that.pendingSuccess.push(successCallBack);
      if(fn2) that.pendingError.push(errorCallBack);
      if(that.rejected) that.runListener('error', that.result);
      if(that.fullFilled) that.runListener('success', that.result);
    })
  }


  catch(fn) {
    const that = this;
    return new MyPromise((resolve, reject) => {
      const errorCallBack = (result) => {
        try {
          reject(fn(result));
        } catch(e) {
          reject(e);
        }
      }
      
      this.pendingError.push(errorCallBack);
      if(that.rejected) that.runListener('error', this.result);
    })
  }
}