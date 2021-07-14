const { uppercase, findUserById, getUserName, getRepos, fetch } = require('./testesAssincronos');

test('Ao chamar a função uppercase,', () => {
  uppercase('abacaxi', (result) => {
    expect(result).toBe('ABACAXI');
  })
});

describe('Ao chamar a funcao findUserById,', () => {
  it('verifica se o usuario foi encontrado', () => {
    return expect(getUserName(4)).resolves.toEqual('Mark');
  });
  it('verifica se o usuario nao foi encontrado', () => {
    return expect(findUserById(6)).rejects.toEqual({ error: 'User with ' + 6 + ' not found.' })
  });
});

describe('Testando com async/await', () => {
  describe('Ao chamar a funcao findUserById,', () => {
    it('verifica se o usuario foi encontrado', async () => {
      const user = await getUserName(5);
      expect(user).toEqual('Paul');
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