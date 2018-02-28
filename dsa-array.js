'use strict';
const mem = require('./memory');

const memory = new mem();


class Array {
  constructor() {
    this.length = 0;
    this._capacity  = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }
}


