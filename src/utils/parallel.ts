export interface Parallel {
  new(lim: number): number;
}

export class Parallel implements Parallel {
  constructor(lim: number) {
    this.threads = lim;
  }

  threads: number;

  arr: number[] = [];

  async jobs(...args: (() => Promise<number>)[]) {
    let i = -1;
    const { arr } = this;

    for (let n = 0; n < this.threads; n += 1) {
      runJob();
    }

    async function runJob(): Promise<void> {
      i += 1;

      if (i > args.length - 1) return;

      arr.push(await args[i]());
      runJob();

    }

    return new Promise((resolve) => {

      const timer = setInterval(() => {

        if (arr.length === args.length) {
          clearInterval(timer);
          resolve(arr);
        }
      }, 1)
    });
  }
}
