interface Parallel {
    lim: number;
    this: {};
    jobs(threads: {}): {};
}

class Parallel {

    costructor(lim: number) {
        this.lim = lim;
    }

    async jobs(...args: Function[]) {

        let i: number = 0;
        let arr: number[] = [];
        let threadLim = [];
        threadLim.length = 2;

        for (let n = 0; n < threadLim.length; n += 1) {
            runJob(args[i]);
            i += 1;
        }

        function runJob(arg: Function) {
            console.log(`run i:${i}`)
            arg().then(function (result: number) {
                console.log(`result: "${result}" i ="${i}`);
                arr.push(result);
                if (i == args.length - 1) return;
                return runJob(args[i += 1]);
            });
        };
        return arr;
    }
}

export let runner = new Parallel();

