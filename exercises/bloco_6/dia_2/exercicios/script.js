const listaEstados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
const estados = document.getElementById('estado');

for (let index = 0; index < listaEstados.length; index += 1) {
  const opcaoEstado = document.createElement('option');
  opcaoEstado.value = listaEstados[index];
  opcaoEstado.innerHTML = listaEstados[index];
  estados.appendChild(opcaoEstado);
}