//Exercícios 2:

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;

console.log("Nome completo:", fullName);

// 2. Template strings
const greeting = `Olá, meu nome é ${firstName} ${lastName}`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);

console.log("Nome em letras maiúsculas:", fullName.toUpperCase());
console.log("Nome em letras minúsculas:", fullName.toLocaleLowerCase());
