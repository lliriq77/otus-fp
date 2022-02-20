export interface Parallel {
  new (lim: number): number;
}

export class Parallel implements Parallel {
  constructor(lim: number) {
    this.threads = lim;
  }

  threads: number;

  arr: number[] = [];

  async jobs(...args: (() => Promise<number>)[]) {
    const jobs = [...args];

    return new Promise((resolve) => {
      for (let n = 0; n < this.threads; n += 1) {
        runJob.call(this);
      }

      async function runJob(this: Parallel): Promise<void> {
        const job = jobs.shift();

        if (job) {
          job().then((value) => {
            this.arr.push(value);

            if (this.arr.length === args.length) resolve(this.arr);
            runJob.call(this);
          });
        }
      }
    });
  }
}
