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
  console.log(lesson2);

  const listarChaves = (objeto) => {
    console.log(`${Object.keys(objeto)}`)
  }

  listarChaves(lesson3);