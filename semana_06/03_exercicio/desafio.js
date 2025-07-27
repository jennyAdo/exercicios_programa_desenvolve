//1. Calcule a média de 3 números: 15, 25 e 38
const a = 15;
const b = 25;
const c = 38;

const media = (a + b + c) / 3;
console.log("Média:", media);

//2. Converta a string "123.45" em um número
const text = "123.45";
const numero = parseFloat(text);
console.log("Número convertido: ", numero, typeof numero);

//3. Arredonde o resultado de 9.7 dividido por 2 para o inteiro mais próximo
const nota = 9.7;
const dividirNota = nota / 2;
const arredondado = Math.round(dividirNota);
console.log("Resultado arredondado:", arredondado);
