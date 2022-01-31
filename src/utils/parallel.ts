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
    const { arr } = this;

    for (let n = 0; n < this.threads; n += 1) {
      runJob();
    }

    function runJob() {
      i += 1;

      if (i > args.length - 1) return;

      args[i]().then((result: number) => {
        arr.push(result);
        runJob();
      });
    }

    return new Promise(function (resolve) {
      setTimeout(() => resolve(arr), 2000);
    }).then(result => result);

  }
}
