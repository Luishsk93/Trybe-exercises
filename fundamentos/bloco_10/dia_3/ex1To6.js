
// Jest - Simulando comportamentos

const { rest } = require('lodash');
const fetch = require('node-fetch');

const randomNumber = () =>  Math.floor(Math.random() * 101);

const strToUppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatTwoLetters = (str1, str2) => str1 + str2;

const docPicturesApiRequisition = (url) => {
  fetch(url)
  .then(res => res.json())
  .catch(error => 'erro');
}

module.exports = { randomNumber, strToUppercase, firstLetter, concatTwoLetters, docPicturesApiRequisition };