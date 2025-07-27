//Desafio
// 1. Extraia o primeiro nome usando o método slice ou substring
const primeiroNome = fullName.slice(0, 5);
console.log("Primeiro nome:", primeiroNome);

//2. Verifique se o nome completo contém a letra 'a'
const contemLetraA = fullName.includes("a");
console.log("Contém a letra 'a'?", contemLetraA);

//3. Substitua "Silva" por outro sobrenome usando replace
const SubstituaSobrenome = fullName.replace("Silva", "Oliveira");
console.log("Novo sobrenome:", SubstituaSobrenome);
