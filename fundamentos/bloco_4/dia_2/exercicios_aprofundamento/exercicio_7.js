// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = Infinity;

for (number of numbers){
    if (number < menor){
        menor = number;
    }
}

console.log(menor);