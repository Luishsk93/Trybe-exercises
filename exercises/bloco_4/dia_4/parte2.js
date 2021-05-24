// Parte II - Funções

// Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

// 1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(palavra){
    let palavraInvertida = "";
    for (let i = palavra.length - 1; i >= 0; i -= 1){
        palavraInvertida = palavraInvertida + palavra[i];
    }

    if (palavra == palavraInvertida){
        return true;
    } else{
        return false;
    }
}

console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

console.log('\n');

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaior(lista){
    let maior = -Infinity;
    let maiorIndice = Infinity;
    for (let i = 0; i < lista.length; i += 1){
        if (lista[i] > maior){
            maiorIndice = i;
        }
  }
  console.log(maiorIndice);
}

indiceDoMaior([2, 3, 6, 7, 10, 1]);

console.log('\n');

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMenor(lista){
    let menor = Infinity;
    let menorIndice = Infinity;
    for (let i = 0; i < lista.length; i += 1){
        if (lista[i] < menor){
            menorIndice = i;
        }
  }
  console.log(menorIndice);
}

indiceDoMenor([2, 4, 6, 7, 10, 0, -3]);

console.log('\n');

// 4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorQtdeCaracteres(lista){
    maior = "";
    for (nome of lista){
        if (nome.length > maior.length){
            maior = nome;
        }
    }

    console.log(maior);
}

maiorQtdeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

console.log('\n');
