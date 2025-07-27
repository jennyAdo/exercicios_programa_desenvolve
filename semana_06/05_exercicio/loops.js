// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Loop for com break
console.log("Loop com break:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Encontrei o 6, parando o loop!");
    break;
  }
  console.log(i);
}

// Loop for com continue
console.log("Pulando números pares:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Pula o resto da iteração
  }
  console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("Lista de frutas:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruta ${i + 1}: ${fruits[i]}`);
}
