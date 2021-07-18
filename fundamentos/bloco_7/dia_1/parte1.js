// 1 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 2 Faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function ordenar() {
  const clone = [13, 3, 4, 10, 7, 2];
  for (let i = 0; i < oddsAndEvens.length; i += 1) {
    let posicao = 0;
    for (let j = 0; j < oddsAndEvens.length; j += 1) {
      if (oddsAndEvens[i] > oddsAndEvens[j]) {
        posicao = posicao + 1;
      }
    }
    clone[posicao] = oddsAndEvens[i];
  }
  return clone;
}
console.log(`Os numeros ${ordenar()[0]}, ${ordenar()[1]}, ${ordenar()[2]}, ${ordenar()[3]}, ${ordenar()[4]}, ${ordenar()[5]} se encontram ordenados de forma crescente!`)