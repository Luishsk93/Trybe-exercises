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

describe('Testando com async/await', () => {
  describe('Ao chamar a funcao findUserById,', () => {
    it('verifica se o usuario foi encontrado', async () => {
      const user = await findUserById(5);
      expect(user.name).toEqual('Paul');
    });
    it('verifica se o usuario foi encontrado', async () => {
      try {
        await findUserById(8);
      } catch (error) {
        expect(error).toEqual({ error: 'User with ' + 8 + ' not found.' });
      }
    });
  });
});