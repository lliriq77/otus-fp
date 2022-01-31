export function sumfunc(a?: number) {
  let currentSum: number = a ?? 0;

  function f(b: number) {
    currentSum += b;
    return f;
  }

  f.toString = function toString(): number {
    return currentSum;
  };

  return f;
}
