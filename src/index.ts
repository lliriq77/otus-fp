import { curryfunc } from "./utils/curryfunc";
import { sum } from "./utils/curryfunc";
import { curriedSum } from "./utils/curryfunc";
import { runner } from "./utils/parallel";
import { sumfunc } from "./utils/sumfunc"



console.log(await runner
    .jobs(
        () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
        () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
        () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
        () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
        () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
    )) // [1, 3, 2, 4, 5];