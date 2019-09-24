Function.prototype.bind = function(context, ...args) {
  if (typeof this !== 'function')  throw new TypeError();
  const fToBind = this;
  function fNOP() {};
  function fBound(...args2) {
    return fToBind.call(
      this instanceof fBound ?
      this : context,
      ...args,
      ...args2
    )
  }

  if(!fToBind.prototype) {
    fNOP.prototype = fToBind.prototype
  }

  fBound.prototype = new fNOP()

  return fBound;
}

Function.prototype.bind = function(context, ...args) {
  context.__fn = this;

  function fNop() {};

  fNop.prototype = this.prototype;

  function fBound(...args2) {
    if(this instanceof fBound) {
      const obj = Object.create(fBound.prototype);
      obj.__fn = context.__fn;
      return obj.__fn(...args, ...args2)
    }
    return context.__fn(...args, ...args2)
  };

  fBound.prototype = new fNop();
  return fBound
}