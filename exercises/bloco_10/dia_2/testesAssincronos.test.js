const { uppercase, findUserById, getUserName } = require('./testesAssincronos');

test('Ao chamar a função uppercase,', () => {
  uppercase('abacaxi', (result) => {
    expect(result).toBe('ABACAXI');
  })
});

describe('Ao chamar a funcao findUserById,', () => {
  it('verifica se o usuario foi encontrado', () => {
    findUserById(4).then( user => {
      expect(user.name).toEqual('Mark');
    });
  });
  it('verifica se o usuario nao foi encontrado', () => {
    return expect(findUserById(6)).rejects.toEqual({ error: 'User with ' + 6 + ' not found.' })
  });
});