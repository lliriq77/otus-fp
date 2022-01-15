import { sumfunc } from "./sumfunc";

const s = sumfunc as Function;
const s3 = sumfunc(3) as Function;

describe("sumfunc", () => {

    it("is a function", () => {
        expect(sumfunc).toBeInstanceOf(Function);
    });

    it("returns 0 for sumfunc()", () => {

        expect((Number(sumfunc()))).toBe(0);
    });

    it("returns 1 for s(1)", () => {

        expect(Number(s(1))).toBe(1);
    });

    it("returns 3 for s(1)(2)", () => {

        expect(Number(s(1)(2))).toBe(3);
    });

    it("returns 12 for s(3)(4)(5)", () => {

        expect(Number(s(3)(4)(5))).toBe(12);
    });

    it("returns 8 for s3(5)", () => {

        expect(Number(s3(5))).toBe(8);
    });

    it("returns 9 for s(3)(6)", () => {

        expect(Number(s(3)(6))).toBe(9);
    });
})