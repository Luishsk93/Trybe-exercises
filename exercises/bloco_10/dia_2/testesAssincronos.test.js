const { uppercase } = require('./testesAssincronos');

test('Ao chamar a função uppercase,', () => {
  uppercase('abacaxi', (result) => {
    expect(result).toBe('ABACAXI');
  })
});