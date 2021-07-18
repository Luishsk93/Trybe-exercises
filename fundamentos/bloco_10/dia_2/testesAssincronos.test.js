const { uppercase, findUserById, getUserName, getRepos, getAnimal, findAnimalsByAge } = require('./testesAssincronos');

test('Ao chamar a função uppercase,', () => {
  uppercase('abacaxi', (result) => {
    expect(result).toBe('ABACAXI');
  })
});

// ---------------------
describe('Ao chamar a funcao findUserById,', () => {
  it('verifica se o usuario foi encontrado', () => {
    return expect(getUserName(4)).resolves.toEqual('Mark');
  });
  it('verifica se o usuario nao foi encontrado', () => {
    return expect(findUserById(6)).rejects.toEqual({ error: 'User with ' + 6 + ' not found.' })
  });
});

// ---------------------
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

// ---------------------
describe('Ao chamar a funcao getRepos,', () => {
  it('verifique que os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram nessa lista', async () => {
    const repositories = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repositories).toContain('sd-01-week4-5-project-todo-list');
    expect(repositories).toContain('sd-01-week4-5-project-meme-generator');
  });
})

// ---------------------
describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });
  });

  // ---------------------

  describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com a idade procurada', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return findAnimalsByAge(2).then(animal => {
          expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
        });
      });
    });
  
    describe('Quando não existe o animal com a idade procurada', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return findAnimalsByAge(60).catch(error =>
          expect(error).toEqual('Não possui animal com essa idade.')
        );
      });
    });
  });

  // ---------------------