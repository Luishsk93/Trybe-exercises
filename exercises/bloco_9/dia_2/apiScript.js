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




window.onload = () => fetchJoke();