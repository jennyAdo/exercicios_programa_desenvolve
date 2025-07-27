//Desafio

//for (inicialização; condição; incremento)

//1. Crie um loop que imprima a tabuada do 7 (de 1 a 10)
console.log("Tabuada do sete:");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

//2. Crie um array de números e calcule a soma deles usando um loop
const numbers = [5, 10, 15, 20, 25];
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma = soma + numbers[i];
}
console.log("Soma:", soma);

//3. Crie um loop que identifique o menor valor em um array de números
const numbers = [10, 5, 8, 20, 3, 15];
let menorValor = numbers[0];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < menorValor) {
    menorValor = numbers[i];
  }
}
console.log("Menor valor:", menorValor);
