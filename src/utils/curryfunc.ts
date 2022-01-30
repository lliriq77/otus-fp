type argsArr = number[];
type countSum = (...args: argsArr) => number;

interface Curry {
  (f: countSum): Curried;
}

interface Curried {
  (a: number, b: number, c: number, d: number, e: number): number;
  (a: number, b?: number, c?: number, d?: number): Curried;
}



const sumFunc: countSum = function sum(a, b, c, d, e): number {
  return a + b + c + d + e;
}

const curryFunc: Curry = function curryFunc(f) {

  const curriedFunc: Curried = function curriedFunc(...args: argsArr) {

    if (args.length >= f.length) {

      return f(...args);
    }
    return (...args2: argsArr) => curriedFunc(...args.concat(args2));

  };

  return curriedFunc;
}


export const hof = curryFunc(sumFunc);
