export function curryfunc(f: Function): Function {

    return function curried(this: {}, ...args: number[]) {
        if (args.length >= f.length) {
            return f.apply(this, args);
        } else {
            return function (this: {}, ...args2: number[]) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

export function sum(a: number, b: number, c: number, d: number, e: number) {
    return a + b + c + d + e;
}

export let curriedSum = curryfunc(sum);