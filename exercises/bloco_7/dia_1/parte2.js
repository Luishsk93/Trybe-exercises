// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
// Crie uma função que receba um número e retorne seu fatorial.

const fazerFatorial = (n) => {
    let fatorial = 1;
    if (n < 0) {
      console.log(`Digite um valor positivo`);
    } else if (n === 0) {
      fatorial = 1;
    } else {
      for (let i = 1; i <= n; i += 1) {
        fatorial = fatorial * i;
      }
    }
    return fatorial;
}

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const retornarMaiorPalavra = (frase) => {
  let listaPalavras = frase.split(" ");
  let maiorPalavra = '';
  for (palavra of listaPalavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}

console.log(retornarMaiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'));



// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const substituirPalavra = (palavra) => {
  let frase = "Tryber x aqui!";
  let fraseNova = '';
  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === 'x') {
      fraseNova = fraseNova + palavra;
    } else {
      fraseNova = fraseNova + frase[i];
    }
  }
  return fraseNova;
}
console.log(substituirPalavra('hyung'))

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .



// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

