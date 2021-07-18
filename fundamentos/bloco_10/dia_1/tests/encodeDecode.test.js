const { encode, decode } = require('../src/playgroundFunctions');

describe('Para as funções encode e decode crie os seguintes testes', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toBe('function');
  })
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('abc')).toBe('1bc');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('1bc')).toBe('abc');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('abc').length).toBe('abc'.length);
  })
})