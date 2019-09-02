function co(gen: GeneratorFunction, ...args: any[]) {
  return new Promise((resolve, reject) => {
    let re: Generator;
    if (typeof gen === "function") re = gen(...args);
    if (!re || typeof gen !== "function") return  resolve(re);
    onFullfilled();

    function onFullfilled(res?: any) {
      let ret: IteratorResult<any>;
      try {
        ret = re.next(res);
      } catch (e) {
        reject(e);
      }
      next(ret);
    }
    function next(ret: IteratorResult<any>) {
      if (ret.done) resolve(ret.value);
      Promise.resolve(ret.value).then(res => {
        onFullfilled(res);
      }).catch(e => {
        reject(e);
      });
    }
  });
}