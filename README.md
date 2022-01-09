# Реализация типовых задач с использованием OOП / ФП с покрытием кода тестами

> ##### Домашнее задание курса **[JavaScript Developer. Basic](https://otus.ru/lessons/javascript-basic/?int_source=courses_catalog&int_term=programming)**
>
> ![PR Sanity Check](https://github.com/lliriq77/otus--game-of-life/actions/workflows/sanity-check.yml/badge.svg)![Coverage](https://github.com/lliriq77/otus--game-of-life/actions/workflows/coverage.yml/badge.svg)

---

Задачи:

1. Написать функцию для каррирования (https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
Пример использования функции
const func = (a, b, c, d, e) => a + b + c + d + e;

const hof = yourFunction(func);

console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35

2. Написать функцию сумматор. При вызове функции с аргументами она суммирует переданные значения (полезно прочитать про методы .valueOf и .toString)
const sum = function() { /* put your code here */};

alert(sum()); // 0;

const s = sum();
alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12

const s3 = sum(3);

alert(s3(5)); // 8
alert(s3(6)); // 9

3. Реализовать функцию параллельной потоковой обработки данных. В конструктор передается число парралельных "потоков", которое указывает сколько данных обрабатывается в конкретный момент времени
const runner = new Parallel(2);

console.log(await runner
  .jobs(
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
  )) // [1, 3, 2, 4, 5];

4. Реализовать фукнцию, возвращающую развернутую по спирали матрицу (любой размерности)
spiral([
  [0,  1,  2,  3,  4],
  [5,  6,  7,  8,  9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19]
]); // [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]

5. Реализовать функцию, реализующую сортировку с учетом правил semver

semverSort([ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]); // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
