import { Readable } from "stream";

class Counter extends Readable {
  _max: any;
  _index: any;
  constructor(opt?: any) {
    super(opt);
    this._max = 1000000;
    this._index = 1;
  }

  _read() {
    const i = this._index++;
    if (i > this._max) this.push(null);
    else {
      const str = String(i);
      const buf = Buffer.from(str, "ascii");
      this.push(buf);
    }
  }
}

const couter = new Counter();

couter.on("data", data => console.log(data));
