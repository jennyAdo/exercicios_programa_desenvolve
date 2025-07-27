//Desafio:
//1. Crie um sistema de classificação de notas:
//- 0-59: F
//- 60-69: D
//- 70-79: C
//- 80-89: B
//- 90-100: A

const nota = 10;

if (nota >= 0 && nota <= 59) {
  console.log("Sua nota é F!");
} else if (nota >= 60 && nota <= 69) {
  console.log("Sua nota é D!");
} else if (nota >= 70 && nota <= 79) {
  console.log("Sua nota é C!");
} else if (nota >= 80 && nota <= 89) {
  console.log("Sua nota é B!");
} else if (nota >= 90 && nota <= 100) {
  console.log("Sua nota é A!");
} else {
  console.log("Nota inválida!");
}
