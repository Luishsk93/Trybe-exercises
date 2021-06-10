const listaEstados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
const estados = document.getElementById('estado');
for (let index = 0; index < listaEstados.length; index += 1) {
  const opcaoEstado = document.createElement('option');
  opcaoEstado.value = listaEstados[index];
  opcaoEstado.innerHTML = listaEstados[index];
  estados.appendChild(opcaoEstado);
}

const data = document.getElementById('dataInicio')
function validaData(event) {
  let x = event.target
  if (x.value !== "") {
    if (parseInt(x.value[0] + x.value[1]) < 0 || parseInt(x.value[0] + x.value[1]) > 31 || parseInt(x.value[3] + x.value[4]) < 0 || parseInt(x.value[3] + x.value[4]) > 12 || x.value[6] === "-") {
    alert('Data inconsistente');
    }
  }
}
data.addEventListener('input', validaData);

const botaoSubmeter = document.getElementById('botaoSubmeter');

function previnir(event) {
  
}