// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

// Adicione o código do exercício aqui:
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((total, currentValue) => {
    let count = 0;
    for (let i = 0; i < currentValue.length; i += 1) {
      if (currentValue[i] === 'A' || currentValue[i] === 'a') {
        count += 1;
      }
    }
    return total + count;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);