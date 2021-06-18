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

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const botao = document.getElementById('botao');
let clickCount = 0;
const p = document.getElementsByTagName('p')[0];
botao.addEventListener('click', (event) => {
  clickCount += 1;
  p.innerText = clickCount;
})

