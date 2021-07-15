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
  })
  
})