// Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let greetingPeople = [];
  for (const person in people) {
    greetingAPerson = greeting + people[person];
    greetingPeople.push(greetingAPerson);
  }
  return greetingPeople;
};
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const assert = require('assert');

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
