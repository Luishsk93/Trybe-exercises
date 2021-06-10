const listaEstados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
const estados = document.getElementById('estado');
for (let index = 0; index < listaEstados.length; index += 1) {
  const opcaoEstado = document.createElement('option');
  opcaoEstado.value = listaEstados[index];
  opcaoEstado.innerHTML = listaEstados[index];
  estados.appendChild(opcaoEstado);
}

const data = document.getElementById('dataInicio')
if (data.value !== "") {
  if (parseInt(data.value[0] + data.value[1]) < 0 || parseInt(data.value[0] + data.value[1]) > 31 || parseInt(data.value[3] + data.value[4] < 0) || parseInt(data.value[3] + data.value[4] > 12) || data.value === "-") {
    alert('Data inconsistente');
  }
}