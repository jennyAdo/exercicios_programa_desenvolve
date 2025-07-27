const compras = [
  { nome: "banana", categoria: "fruta", preço: 20 },
  { nome: "carro", categoria: "automóvel", preço: 100.0 },
  { nome: "sabão", categoria: "limpeza", preço: 30 },
  { nome: "luva", categoria: "vestuário", preço: 60 },
];

//1. Use map para criar um array de strings formatadas como
// "Nome do produto - Categoria" para cada produto

const comprasCategorias = compras.map(function (produto) {
  return `${produto.nome} - ${produto.categoria}`;
});

console.log(comprasCategorias);

//2. Use map para criar um array com os preços
// de todos os produtos com impostos (15% a mais)

const impostosProdutos = compras.map(function (produto) {
  produto.preço + produto.preço * 0.15;
});

console.log(impostosProdutos);

//3. Combine forEach com um acumulador externo para
// calcular o valor total de todos os produtos

let total = 0;

compras.forEach(function (produto) {
  total += produto.preço;
});

console.log(total);
