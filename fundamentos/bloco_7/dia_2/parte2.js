const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const adicionarTurno = (objeto, chave, valor) => {
  const turno = {
  };
  turno[chave] = valor;
  Object.assign(objeto,turno);
}

adicionarTurno(lesson2, 'turno', 'manhã');
// console.log(lesson2);

const listarChaves = (objeto) => { console.log(`${Object.keys(objeto)}`) }

// listarChaves(lesson3);

const mostrarTamanho = (objeto) => { console.log(`${Object.keys(objeto).length}`) }

// mostrarTamanho(lesson1);

const listarValores = (objeto) => { console.log(`${Object.values(objeto)}`) }

// listarValores(lesson1);
const licao1 = {
  lesson1: ''
}

licao1.lesson1 = lesson1;
const licao2 = {
  lesson2: ''
}

licao2.lesson2 = lesson2;
const licao3 = {
  lesson3: ''
}

licao3.lesson3 = lesson3;

const allLessons = Object.assign({},  licao1, licao2, licao3);

// console.log(allLessons);

const contarNumeroEstudantes = (objeto) => {console.log(`${objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes}`)}

// contarNumeroEstudantes(allLessons);

const pegarValorPeloNumero = (objeto, n) => {console.log(`${Object.values(objeto)[n]}`)};

// pegarValorPeloNumero(lesson1, 0);

const verificarPar = (objeto, chave, valor) => {
  const listaDeChaves = Object.keys(objeto);
  let par = false;
  for (index in listaDeChaves) {
    if (listaDeChaves[index] === chave) {
      if (objeto[listaDeChaves[index]] === valor) {
        par = true;
      }
    }
  }
  return par;
}

console.log(verificarPar(lesson3,'turno','noite'));