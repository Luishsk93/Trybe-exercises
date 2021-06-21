// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

function secondThirdSmallest(array) {
    let results = []
    // referencia usada: https://www.w3schools.com/jsref/jsref_sort.asp
    let arrayAscendingOrder = array.sort(function(a, b){return a-b});
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
const assert = require('assert');
assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);