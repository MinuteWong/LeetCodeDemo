function composes(middlewareFn: any[]) {
  return function(ctx: any) {
    let i = -1;
    return next();
    function next() {
      i++;
      if (middlewareFn.length <= i) return Promise.resolve();
      return middlewareFn[i](ctx, next);
    }
  };
}