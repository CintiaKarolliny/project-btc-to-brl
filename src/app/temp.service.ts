import { Injectable } from '@angular/core';

@Injectable()
export class TempService {
  constructor() {}

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);
  counter: number = 0;

  getSeconds() {
    return Math.trunc(this.counter % 60);
  }
}
