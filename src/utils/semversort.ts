export function semverSort(arg: string[]) {
  return arg
    .map((el) => el.split(".").map((i) => Number(i) + 100))
    .sort()
    .map((el) => el.map((i) => i - 100).join("."));
}
