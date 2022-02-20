interface CurriedFunction1<T, R> {
  (t1: T): R;
}

interface CurriedFunction2<T, R> {
  (t1: T, t2: T): R;
  (t1: T): CurriedFunction1<T, R>;
}

interface CurriedFunction3<T, R> {
  (t1: T, t2: T, t3: T): R;
  (t1: T, t2: T): CurriedFunction1<T, R>;
  (t1: T): CurriedFunction2<T, R>;
}

interface CurriedFunction4<T, R> {
  (t1: T, t2: T, t3: T, t4: T): R;
  (t1: T, t2: T, t3: T): CurriedFunction1<T, R>;
  (t1: T, t2: T): CurriedFunction2<T, R>;
  (t1: T): CurriedFunction3<T, R>;
}

interface CurriedFunction5<T, R> {
  (t1: T, t2: T, t3: T, t4: T, t5: T): R;
  (t1: T, t2: T, t3: T, t4: T): CurriedFunction1<T, R>;
  (t1: T, t2: T, t3: T): CurriedFunction2<T, R>;
  (t1: T, t2: T): CurriedFunction3<T, R>;
  (t1: T): CurriedFunction4<T, R>;
}

export type CurriedFunction<T, R> = T extends [R, R, R, R, R]
  ? CurriedFunction5<R, R>
  : T extends [R, R, R, R]
  ? CurriedFunction4<R, R>
  : T extends [R, R, R]
  ? CurriedFunction3<R, R>
  : T extends [R, R]
  ? CurriedFunction2<R, R>
  : T extends [R]
  ? CurriedFunction1<R, R>
  : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type func<T extends any[], R> = (...args: T) => R;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function curryFunc<T extends any[], R>(
  fn: (...args: T) => R
): CurriedFunction<T, R>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function curryFunc(f: (...args: any[]) => any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const curriedFunc = function curriedFunc(...args: any[]): any {
    if (args.length >= f.length) {
      return f(...args);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args2: any[]) => curriedFunc(...args.concat(args2));
  };

  return curriedFunc;
}

const sumFunc: func<[number, number, number, number, number], number> =
  function sumFunc(a, b, c, d, e) {
    return a + b + c + d + e;
  };

export const hof = curryFunc(sumFunc);
