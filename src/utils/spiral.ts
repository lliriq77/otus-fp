export function spiral(arr: number[][]): number[] {
  let result: number[] = [];

  result = result.concat(arr.shift() as number[]);

  while (arr.length > 0) {
    for (let n = 0; n < arr.length; n += 1) {
      if (n === arr.length - 1) {
        arr[n].reverse();
        result = result.concat(arr.pop() as number[]);
      } else result.push(arr[n].reverse().shift() as number);
    }

    arr.reverse();
  }

  return result;
}
