import deepEqual from 'deep-equal';
import { call, put } from 'redux-saga/effects';

export default class Quest {
  constructor() {
    this.state = {};
    this.expected = [];
  }

  setState(x) {
    this.state = x;
  }

  expectTo = {
    call: (...callArgs) => ({
      willReturn: returns => {
        let res;
        const pr = new Promise((resolve) => {
          res = resolve;
        });
        this.expected.push({ effect: call(...callArgs), returns, resolve: res });
        return pr;
      }
    }),
    put: (...actionArgs) => {
      let res;
      const pr = new Promise((resolve) => {
        res = resolve;
      });
      this.expected.push({ effect: put(...actionArgs), resolve: res });
      return pr;
    }
  };

  begin(generator) {
    let done = false;
    let lastValue = undefined;
    while (!done) {
      const effect = generator.next(lastValue);
      const expected = this.expected.shift();
      done = effect.done;
      const value = effect.value;
      lastValue = this.step(value, expected);
    }
    if (this.expected.length > 0) {
      throw new Error('Expected more effects than occurred.');
    }
  }

  step(actual, expected) {
    /* eslint complexity: 0 */
    if (!actual || !actual['@@redux-saga/IO']) {
      return actual;
    }
    if (!expected) {
      throw new Error('More effects occurred than expected.' +
        ` First additional effect: ${JSON.stringify(actual)}`);
    }
    if (actual['SELECT']) {
      this.expected.unshift(expected);
      return actual['SELECT'].selector(this.state);
    }
    else if (deepEqual(actual, expected.effect)) {
      expected.resolve();
      return expected.returns;
    }
    throw new Error('Unexpected effect:' +
      `Expected: ${expected && JSON.stringify(expected.effect)}.` +
      `Actual: ${actual && JSON.stringify(actual)}`);
  }
}





