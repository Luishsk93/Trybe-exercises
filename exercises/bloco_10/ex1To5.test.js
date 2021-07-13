const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz, obj1, obj2, obj3 } = require('./ex1To5.js');
const originalArr = [1, 2, 3, 4];

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
      expect(myRemove(originalArr, 3)).toEqual([1, 2, 4]);
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
        expect(myRemove(originalArr, 3)).not.toEqual(originalArr);
    })
    it('Verifique se o array passado por parâmetro não sofreu alterações', () => {
        expect(myRemove(originalArr)).toEqual(originalArr);
    })
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove(originalArr, 5)).toEqual(originalArr);
    })
})

describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
      expect(myRemoveWithoutCopy(originalArr, 3)).toEqual([1, 2, 4]);
    })
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
      expect(myRemoveWithoutCopy(originalArr, 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
      expect(myRemoveWithoutCopy(originalArr)).toEqual(originalArr);
    })
    it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
      expect(myRemoveWithoutCopy(originalArr, 5)).toEqual(originalArr);
    })
  })
  
  describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(9)).toBe('fizz');
    })
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(10)).toBe('buzz');
    })
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz(4)).toBe(4);
    })
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
      expect(myFizzBuzz('x')).toBe(false);
    })
  })

  describe('Compare dois objetos para verificar se são idênticos ou não', () => {
    it('Compara obj1 com o obj2 e verifique se o retorno e esperado', () => {
      expect(obj1).toEqual(obj2);
    })
    it('Compara obj1 com o obj3 e verifique se o retorno e esperado', () => {
        expect(obj1).not.toEqual(obj3);
    })
    it('Compara obj2 com o obj3 e verifique se o retorno e esperado', () => {
        expect(obj2).not.toEqual(obj3);
    })
  })