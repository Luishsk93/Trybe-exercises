const { expect } = require('@jest/globals');
const ex1To6 = require('./ex1To6');
jest.mock('./ex1To6');

describe('Ao chamar a funcao randomNumber,', () => {
  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    ex1To6.randomNumber();
    expect(ex1To6.randomNumber).toHaveBeenCalled;
    ex1To6.randomNumber = jest.fn().mockReturnValue(10);
    expect(ex1To6.randomNumber()).toBe(10);
    expect(ex1To6.randomNumber).toHaveBeenCalledTimes(1);
  });
  it('Teste se a implementacao ocorreu uma unica vez e qual o seu retorno', () => {
    ex1To6.randomNumber.mockReset();
    ex1To6.randomNumber.mockImplementation((a, b) => a / b);
    expect(ex1To6.randomNumber(4,2)).toBe(2);
    expect(ex1To6.randomNumber).toBeCalledTimes(1);
  });
  it('Teste os retorno das primeira  e segunda implementacao,', () => {
    ex1To6.randomNumber.mockImplementation((a, b, c) => a * b * c);
    expect(ex1To6.randomNumber(4,2,1)).toBe(8);
    ex1To6.randomNumber.mockImplementation((a) => a * 2);
    expect(ex1To6.randomNumber(1)).toBe(2);
  });
});

describe('Ao chamar a funcao , firstLetter ou concatTwoLetters,', () => {
  it ('strToUppercase, verifica se retorna a string em caixa baixa.', () => {
    ex1To6.strToUppercase.mockImplementation((str) => str.toLowerCase());
    expect(ex1To6.strToUppercase('ABC')).toBe('abc');
  })
  it ('firstLetter, verifica se retorna a ultima letra da string.', () => {
    ex1To6.firstLetter.mockImplementation((str) => str[str.length - 1]);
    expect(ex1To6.firstLetter('ABC')).toBe('C');
  })
  it ('concatTwoLetters, verifica se retorna a concatenacao de tres letras.', () => {
    ex1To6.concatTwoLetters.mockImplementation((str1, str2, str3) => str1 + str2 +str3);
    expect(ex1To6.concatTwoLetters('A','B','C')).toBe('ABC');
  })
})