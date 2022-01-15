export function sumfunc(a?: number): {} {

    let currentSum = a ?? 0;

    function f(b: number): {} {
        currentSum += b;
        return f;
    }

    f.toString = function (): number {
        return currentSum;
    };

    return f;
}
