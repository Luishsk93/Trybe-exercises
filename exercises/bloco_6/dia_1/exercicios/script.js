const listaEstados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
const estados = document.getElementById('estado');
const data = document.getElementById('dataInicio');
const botaoSubmeter = document.getElementById('botaoSubmeter');
const casa = document.getElementById('tipo-moradia-casa');
const ap = document.getElementById('tipo-moradia-ap');
const apaga = document.getElementById('limpaTudo');
const divDadosConsolidados = document.getElementById('dadosConsolidados');
const divErro = document.getElementById('divErro');
const listaIds = ['full-name', 'email', 'cpf', 'endereco', 'cidade', 'Cargo', 'DescricaoCargo', 'curriculo', 'dataInicio'];
let validado = false;
let validadoData = false;

botaoSubmeter.addEventListener('click', validaData);
botaoSubmeter.addEventListener('click',paraAcaoPadrao);
botaoSubmeter.addEventListener('click', validarTextos);
botaoSubmeter.addEventListener('click', validarRadio);
botaoSubmeter.addEventListener('click', dadosConsolidados)
botaoSubmeter.addEventListener('click', erro)
apaga.addEventListener('click', apagarTudo);

for (let index = 0; index < listaEstados.length; index += 1) {
  const opcaoEstado = document.createElement('option');
  opcaoEstado.value = listaEstados[index];
  opcaoEstado.innerHTML = listaEstados[index];
  estados.appendChild(opcaoEstado);
}

function validaData(event) {
  let x = data.value;
  if (data.value !== "") {
    if (parseInt(x[0] + x[1]) < 0 || parseInt(x[0] + x[1]) > 31 || parseInt(x[3] + x[4]) < 0 || parseInt(x[3] + x[4]) > 12 || x[6] === "-") {
    alert('Data inconsistente');
    validadoData = false;
    }
    else {
      validadoData = true;
    }
  }
}

// referencia https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
function paraAcaoPadrao(event) {
    event.preventDefault();
}

function validarTextos() {
  for (let i = 0; i < listaIds.length; i += 1) {
    let x = document.getElementById(listaIds[i]);
    if (x.length > x.maxLength || x.value === "") {
      validado = false;
    }
    else {
      validado = true;
    }
  }
}

function validarRadio() {
  if (casa.checked === false && ap.checked === false) {
    validado = false;
  }
  else {
    validado = true;
  }
}

function dadosConsolidados() {
  if (validado === true && validadoData === true) {
    for (let i = 0; i < listaIds.length; i += 1) {
      let y = document.getElementById(listaIds[i]);
      var texto = texto + " " + y.value;
    }
    if (casa.checked === true) {
      texto = texto + " " + 'casa';
    } else if (ap.checked === true) {
      texto = texto + " " + 'apartamento';
    }
    divDadosConsolidados.innerText = texto;
  }
}

function erro() {
  if (validado === false && validadoData === true) {
    let texto = "Dados nao validados";
    divErro.innerText = texto;
  } else if (validado === true && validadoData === false) {
    let texto = "Data invalida";
    divErro.innerText = texto;
  } else if (validado === false && validadoData === false) {
    let texto = "Dados nao validados e Data invalida";
    divErro.innerText = texto;
  }
} 

function apagarTudo() {
  for (let i = 0; i < listaIds.length; i += 1) {
    let x = document.getElementById(listaIds[i]);
    x.value = "";
  }
  divErro.innerHTML = "";
  divDadosConsolidados.innerText = "";
  casa.checked = false;
  ap.checked = false;
}
