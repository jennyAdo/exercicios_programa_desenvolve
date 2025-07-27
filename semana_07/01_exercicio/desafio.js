//1. Crie uma função que recebe um objeto person e retorna um novo
// objeto com todas as propriedades do original, mais uma propriedade
// "isAdult" (true se age >= 18)

function personIsAdult(pessoa) {
  return {
    ...pessoa,
    isAdult: pessoa.age >= 18,
  };
}

const pessoa = {
  name: "Ana",
  age: 17,
  nacionality: "brasileira",
};
console.log(personIsAdult(pessoa));

//2. Crie uma função que aceita múltiplos arrays como parâmetros e
// retorna um array combinado com todos os elementos (use rest e spread)

const frutas = ["banana", "maça", "morango"];
const padaria = ["pão", "macarrão", "sorvete"];

function combinedArray(frutas, padaria) {
  return;
  [...frutas, ...padaria];
}
console.log(combinedArray);
