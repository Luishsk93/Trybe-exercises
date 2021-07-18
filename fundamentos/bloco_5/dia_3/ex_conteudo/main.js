const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function adicionaClasse (event) {
    var x = event.target.id;
    if (x == 'divUm') {
        divDois.classList.remove("tech");
        divTres.classList.remove("tech");
        divUm.className = "tech";
    } else if (x == 'divDois') {
        divUm.classList.remove("tech");
        divTres.classList.remove("tech");
        divDois.className = "tech";
    } else {
        divUm.classList.remove("tech");
        divDois.classList.remove("tech");
        divTres.className = "tech";
    }
}


divUm.addEventListener('click',adicionaClasse);
divDois.addEventListener('click',adicionaClasse);
divTres.addEventListener('click',adicionaClasse);


function adicionaTexto () {
    let tech = document.querySelector(".tech")
    tech.innerText = input.value;
}

input.addEventListener("keyup", adicionaTexto);

function redireciona () {
    myWebpage.innerHTML = "<a target='_blank' href='https://luishsk93.github.io/'>Meu Portfolio</a>"
}

myWebpage.addEventListener('click',redireciona);

function alteraCor () {
    myWebpage.style.color = "yellow";
}

myWebpage.addEventListener('mouseover',alteraCor);

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// divUm.addEventListener('dblclick', resetText);
// // Não precisa passar o parâmetro dentro do addEventListener. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'divUm'.