const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];
//1. Use filter para encontrar estudantes inativos
const inactiveStudents = students.filter(function (student) {
  return student.active === false;
});
console.log(inactiveStudents);

//2. Use find para encontrar o estudante com id = 3
const IdStudents = students.find(function (student) {
  return student.id === 3;
});
console.log(IdStudents);

//3. Use filter para encontrar estudantes que tiraram pelo menos
// uma nota abaixo de 70
const NotaStudents = students.filter(function (student) {
  for (i = 0; i < student.grades.length; i++) {
    if (student.grades[i] < 70) {
      return true;
    } else {
      return false;
    }
  }
});
console.log(NotaStudents);

//4. Combine filter e map para obter apenas os nomes dos estudantes com média > 85
const MediaStudents = students.filter(function (student) {
  let soma = 0;
  for (i = 0; i < student.grades.length; i++) {
    soma = soma + student.grades[i];
  }
  const Media = soma / student.grades.length;
  if (Media > 85) {
    return true;
  } else {
    return false;
  }
});
console.log(MediaStudents);
