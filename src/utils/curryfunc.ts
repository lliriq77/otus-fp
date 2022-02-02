type func<T> = (...args: T[]) => T;

const curryFunc = function curryFunc<T>(f: func<T>) {
  const curriedFunc = function curriedFunc(...args: T[]): any {
    if (args.length >= f.length) {
      return f(...args);
    }
    return (...args2: T[]) => curriedFunc(...args.concat(args2));
  };

  return curriedFunc;
};

const sumFunc: func<number> = function sumFunc(a, b, c, d, e) {
  return a + b + c + d + e;
};

export const hof = curryFunc(sumFunc);
