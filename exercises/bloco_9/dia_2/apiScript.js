// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const addJokeOnHtml = ({joke}) => {
  const jokes = document.getElementById('jokeContainer');
  jokes.innerHTML = joke;
}


const fetchJoke = () => {
  const jokeContainer = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => addJokeOnHtml(data));
};

const promise = new Promise((resolve, reject) => {
  array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push((Math.floor(Math.random() * 50) + 1) ** 2);
  }
  const sum = array.reduce((total, value) => total + value, 0);
  if (sum < 8000) {
    return resolve(sum);
  } reject(sum)
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));
