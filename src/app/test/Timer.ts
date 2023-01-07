export class Timer {
  constructor(private msg: string = '', private prev: number = Date.now()) {}
  next() {
    const now = Date.now();
    console.log(`${this.msg}: `, now - this.prev);
    this.prev = now;
  }
}
