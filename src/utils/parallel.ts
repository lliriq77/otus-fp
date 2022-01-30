export interface Parallel {
  new(lim: number): number;
}

export class Parallel implements Parallel {
  constructor(lim: number) {
    this.threads = lim;
  }

  threads: number;
  arr: number[] = [];

  async jobs(...args: Function[]) {
    let i = -1;
    const threadLim = [];
    threadLim.length = this.threads;
    const { arr } = this;

    for (let n = 0; n < threadLim.length; n += 1) {
      runJob();
    }

    async function runJob() {
      i += 1;

      if (i > args.length - 1) return;

      args[i]().then((result: number) => {
        arr.push(result);

        return runJob();
      });
    }

    return this.arr;
  }
}
