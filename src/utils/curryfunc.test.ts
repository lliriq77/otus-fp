import { hof } from "./curryfunc";

describe("hof", () => {
  it("is a function", () => {
    expect(hof).toBeInstanceOf(Function);
  });

  it("(1, 2, 3, 4, 5) returns 15", () => {
    expect(hof(1, 2, 3, 4, 5)).toBe(15);
  });

  it("(2, 3, 4)(5, 6) returns 20", () => {
    expect(hof(2, 3, 4)(5, 6)).toBe(20);
  });

  it("(3, 4)(5, 6)(7) returns 25", () => {
    expect(hof(3, 4)(5, 6)(7)).toBe(25);
  });

  it("(4, 5)(6)(7, 8) returns 30", () => {
    expect(hof(4, 5)(6)(7, 8)).toBe(30);
  });

  it("(5)(6)(7)(8)(9) returns 35", () => {
    expect(hof(5)(6)(7)(8)(9)).toBe(35);
  });
});
