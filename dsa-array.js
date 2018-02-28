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

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of Memory!');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  pop() {
    this.length--;
  }

  print(index) {
    console.log(memory.get(this.ptr + index));
  }
}

function main() {
  Array.SIZE_RATIO = 3;
  
  let arr = new Array();

  // arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);

  // arr.pop();
  // arr.pop();
  // arr.pop();

  arr.push('tauhida');

  arr.print(0);

  console.log(arr);
}

main();


