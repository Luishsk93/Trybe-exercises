function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const DaysList = document.querySelector('#days');

  function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let index = 0; index < dezDaysList.length; index += 1) {
      const days = dezDaysList[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      if (days == '24' || days == '31') {
        dayListItem.className = 'day holiday';
      } else if (days == '4' || days == '11' || days == '18') {
        dayListItem.className = 'day friday';
      } else if (days == '25') {
        dayListItem.className = 'day holiday friday';  
      } else {
        dayListItem.className = 'day';
      }
      DaysList.appendChild(dayListItem);
    }
  };
  
  createDaysOfTheMonth();

  function createBotton (string) {
    let button = document.createElement("button");
    button.innerHTML = string;
    if (string == 'Feriados') {
        button.id = 'btn-holiday';
    }
    else if (string == 'Sexta-feira') {
        button.id = 'btn-friday';
    }
    let buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(button);
    // Referencia: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener2
  }
  createBotton('Feriados');

  const holidays = document.querySelectorAll('.holiday');
  let clickFeriados = false;
  function mudaCor() {
    
    if (clickFeriados == false) {
        for (i = 0; i < holidays.length; i += 1){
            holidays[i].style.backgroundColor = 'pink';
        }
        clickFeriados = true;

    }
    else if (clickFeriados == true) {
        for (i = 0; i < holidays.length; i += 1){
            holidays[i].style.backgroundColor = 'rgb(238,238,238)';
        }
        clickFeriados = false;
    }
  }

  document.getElementById("btn-holiday").addEventListener("click", mudaCor);

  createBotton('Sexta-feira');

  const fridays = document.querySelectorAll('.friday');
  const fridaysOriginal = document.querySelectorAll('.friday');
  let clickSexta = false;
  function mudaTexto() {
    sextas = [];
    if (clickSexta == false) {
        for (i = 0; i < fridays.length; i += 1){
            sextas.push(fridays[i]);
            fridays[i].innerText = 'Sextou!';
        }
        clickSexta = true;

    }
    else if (clickSexta == true) {
        fridays[0].innerText = '4';
        fridays[1].innerText = '11';
        fridays[2].innerText = '18';
        fridays[3].innerText = '25';
        clickSexta = false;
    }
  }

  document.getElementById("btn-friday").addEventListener("click", mudaTexto);

  function zoomIn (event) {
    event.target.style.fontSize = 'x-large';
  }

  function zoomOut (event) {
    event.target.style.fontSize = 'initial';
  }

  DaysList.addEventListener("mouseover",zoomIn);
  DaysList.addEventListener("mouseout",zoomOut);

  const tasks = document.querySelector('.my-tasks')

  function adicionaTarefa(string) {
    tarefa = document.createElement('span');
    tarefa.innerHTML = string + '';
    tasks.appendChild(tarefa);
  }

  adicionaTarefa('cozinhar');

  function corDaLegenda(cor) {
    legenda = document.createElement('div');
    legenda.className = 'task';
    legenda.style.backgroundColor = cor;
    tasks.appendChild(legenda);
  }

  let corTarefa = 'blue';
  let corTarefaOriginal = 'blue';
  corDaLegenda(corTarefa);
  
  let task = document.getElementsByClassName('task')[0];
  let clickLegenda = false;

  function atribuiClasse(event) {
    if (clickLegenda == false) {
        event.target.className = 'task selected';
        clickLegenda = true;
        corTarefa = corTarefaOriginal;
    }
    else {
        event.target.className = 'task'
        clickLegenda = false;
        corTarefa = 'rgb(238,238,238)';
    }

  }

  task.addEventListener('click',atribuiClasse);

  let divTask = document.querySelector('.my-tasks').children[2];

  const liDay = document.getElementsByClassName('day');
  let click = false;
  for (i = 0; i < liDay.length; i += 1) {
    let theDay = liDay[i].addEventListener('click', mudaCorDoDia);
}

  function mudaCorDoDia(event) {
    if (click == false) {
        event.target.style.backgroundColor = corTarefa;
        click = true;

    }
    else if (click == true) {
        event.target.style.backgroundColor = 'rgb(238,238,238)';
        click = false;
    }
  }

  for (i = 0; i < liDay.length; i += 1) {
      let theDay = liDay[i].addEventListener('click', mudaCorDoDia);
  }
