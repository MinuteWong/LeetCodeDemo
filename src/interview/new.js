function New(fn, ...arg) {
  const context =  Object.create(fn.prototype);
  const result = fn.apply(context, arg);
  if(result) return result;
  return context;
}