const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
// ---------------------
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };
  
    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};
// ---------------------
const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
// ---------------------
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const getAnimal = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      };

      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

// ---------------------

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject('Não possui animal com essa idade.');
    }, 100);
  })
);

// ---------------------
module.exports = { uppercase, findUserById, getUserName, getRepos, getAnimal, findAnimalsByAge };