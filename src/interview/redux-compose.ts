function compose(middleware: Function[]) {
  return middleware.reduce((a, b) => (...args: any[]) => a(b(...args)));
}