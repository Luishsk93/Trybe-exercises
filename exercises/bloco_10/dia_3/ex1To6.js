
// Jest - Simulando comportamentos

const randomNumber = () =>  Math.floor(Math.random() * 101);

const strToUppercase = (str) => str.toUpperCase();

const firstLetter = (str) => str[0];

const concatTwoLetters = (str1, str2) => str1 + str2;

module.exports = { randomNumber, strToUppercase, firstLetter, concatTwoLetters };