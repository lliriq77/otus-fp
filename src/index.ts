import { hof } from "./utils/curryfunc";
import { Parallel } from "./utils/parallel";
import { sumfunc } from "./utils/sumfunc";
// import { spiral } from "./utils/spiral";
// import { semverSort } from "./utils/semversort";

console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35

// spiral([
//     [0, 1, 2, 3, 4],
//     [5, 6, 7, 8, 9],
//     [10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19]
// ]);

// console.log(semverSort(["1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]));

const runner = new Parallel(2);

console.log(
  await runner.jobs(
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5))
  )
);

alert(sumfunc()); // 0;

const s = sumfunc();
alert(s(1)); // 1
alert(s(1)(2)); // 3
alert(s(3)(4)(5)); // 12

const s3 = sumfunc(3);

alert(s3(5)); // 8
alert(s3(6)); // 9
