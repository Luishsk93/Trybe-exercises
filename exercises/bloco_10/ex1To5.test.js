const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./ex1To5.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  })
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  })
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() =>  sum(4,'5')).toThrow();
  })
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4,'5')).toThrow(new Error ('parameters must be numbers'));
  })
})

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    it('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})
