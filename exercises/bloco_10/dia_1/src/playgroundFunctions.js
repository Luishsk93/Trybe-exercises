function encode(string) {
    let newString = '';
    let newLetter = '';
    for (let letter of string) {
      if (letter === 'a') {
        newLetter = '1';
      } else if (letter === 'e') {
        newLetter = '2';
      } else if (letter === 'i') {
        newLetter = '3';
      } else if (letter === 'o') {
        newLetter = '4';
      } else if (letter === 'u') {
        newLetter = '5';
      } else {
        newLetter = letter;
      }
      newString += newLetter;
    } return newString;
  }
  
  function decode(string) {
    let newString = '';
    let newLetter = '';
    for (let letter of string) {
      if (letter === '1') {
        newLetter = 'a';
      } else if (letter === '2') {
        newLetter = 'e';
      } else if (letter === '3') {
        newLetter = 'i';
      } else if (letter === '4') {
        newLetter = 'o';
      } else if (letter === '5') {
        newLetter = 'u';
      } else {
        newLetter = letter;
      }
      newString += newLetter;
    } return newString;
  }

let techList = (array, name) => {
    array.sort();
    let objectArray = [];
    for (let i = 0; i < array.length; i += 1) {
      let info = {
        tech: '',
        name: '',
      };
      info.tech = array[i];
      info.name = name;
      objectArray.push(info);
    }
    if (array.length === 0) {
      return 'Vazio!';
    } return objectArray;
  }

  function hydrate(string) {
    let arr = string.split(' ');
    let waterCups = 0;
    for (let index of arr) {
      if (!Number.isNaN(Number(index))) {
        waterCups += parseInt(index, 10);
      }
    }
    if (waterCups === 1) {
      return `${waterCups} copo de água`;
    }
    return `${waterCups} copos de água`;
  }

  module.exports = { encode, decode, techList, hydrate };