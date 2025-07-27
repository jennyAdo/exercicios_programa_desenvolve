// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

//1. Para cada aluno, calcule a média das notas

function mediaAluno(aluno) {
  let soma = 0;
  for (let i = 0; i < aluno.grades.length; i++) {
    soma += aluno.grades[i];
  }
  aluno.media = soma / aluno.grades.length;
}

for (let i = 0; i < students.length; i++) {
  mediaAluno(students[i]);
  console.log("Média do aluno", i, ":", students[i].media);
}

//2. Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)

for (let i = 0; i < students.length; i++) {
  if (students[i].media >= 70) {
    console.log(`Aluno ${students[i].name} foi APROVADO com média ${students[i].media}`);
  } else {
    console.log(`Aluno ${students[i].name} foi REPROVADO com média ${students[i].media}`);
  }
}

//3. Conte quantos alunos foram aprovados e quantos foram reprovados

let aprovados = 0;
let reprovados = 0;
for (let i = 0; i < students.length; i++) {
  const aluno = students[i];
  const media = mediaAluno(aluno);

  if (media >= 70) {
    aprovados++;
  } else {
    reprovados++;
  }
}
console.log(`Total de aprovados: ${aprovados}`);
console.log(`Total de reprovados: ${reprovados}`);

//4. Encontre o aluno com a maior média

let melhorMedia = 0; // começa do zero
let melhorAluno = null;

for (let i = 0; i < students.length; i++) {
  const aluno = students[i];
  const media = mediaAluno(aluno); // calcula a média do aluno atual

  if (media > melhorMedia) {
    melhorMedia = media; // atualiza a melhor média
    melhorAluno = aluno; // guarda o aluno com a melhor média
  }
}

console.log(
  `O aluno com a maior média é ${
    melhorAluno.name
  } com média ${melhorMedia.toFixed(2)}`
);

//5. Calcule a média geral da turma

let SomaDasMedias = 0;
for (let i = 0;  < students.length; i++) {
  const aluno = students[i];
  const media = mediaAluno(aluno);
  SomaDasMedias += media;
} 
const mediaDaTurma = SomaDasMedias / students.length; 
console.log("Média Geral da Turma: ", mediaDaTurma); 
