// 1 - Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];


function flatten(arrays) {
  // escreva seu código aqui
  return arrays.reduce((accumulator, currentValue, currentIndex, arr) => {
    for (let i = 0; i < currentValue.length; i += 1) {
      accumulator.push(currentValue[i]);
    }
    return accumulator;
  },);
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);