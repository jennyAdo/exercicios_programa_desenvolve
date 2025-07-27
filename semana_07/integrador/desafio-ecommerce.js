import { inventory } from "./ecommerce.js";

//1. Mostrar uma lista formatada de todos os produtos usando forEach

inventory.forEach(function (produto) {
  console.log(
    `${produto.id} - Produto: ${produto.name}\n` +
      `Preço: R$${produto.price}\n` +
      `Estoque: ${produto.stock}\n` +
      `Categoria: ${produto.category}\n` +
      `Avaliações: ${produto.reviews}\n`
  );
});

//2. Filtrar produtos que estão em estoque (stock > 0)

const productInStock = inventory.filter(function (produto) {
  return produto.stock > 0;
});
console.log("Produtos em estoque:", productInStock);

//3. Filtrar produtos da categoria "Eletrônicos" com preço < 1000

const eletronicosAteMil = inventory.filter(function (produto) {
  return produto.category === "Eletrônicos" && produto.price < 1000;
});
console.log("Eletrônicos com valores abaixo de mil: ", eletronicosAteMil);

//4. Verificar se há algum produto sem estoque

const productOutOfStock = inventory.filter(function (produto) {
  return produto.stock <= 0;
});
console.log("Produtos sem estoque: ", productOutOfStock);

//5. Verificar se todos os produtos têm pelo menos uma avaliação (review)

const allHaveReviews = inventory.filter(function (produto) {
  return produto.reviews.length > 0;
});
console.log("Todos os produtos têm review?", allHaveReviews);

//6. Encontrar o índice do produto "Cafeteira"

const produtoCafeteira = inventory.findIndex(function (produto) {
  return produto.name === "Cafeteira";
});
console.log("Índice da cafeteira: ", produtoCafeteira);

//7. Encontrar o primeiro produto da categoria "Vestuário"
const firstProductVestuario = inventory.find(function (produto) {
  return produto.category === "Vestuário";
});
console.log("Primeiro produto da categoria vestuário: ", firstProductVestuario);

//8. Criar uma função de busca que retorna produtos cujo nome
// contenha um termo específico

function buscarPorNome(termo) {
  return inventory.filter(function (produto) {
    return produto.name.toLowerCase().includes(termo.toLowerCase());
  });
}
const resultado = buscarPorNome("calça");
console.log(resultado);

//9. Calcular a média de avaliações para cada produto e adicionar
// como propriedade "averageRating"

inventory.forEach(function (produto) {
  let soma = 0;
  for (let i = 0; i < produto.reviews.length; i++) {
    soma += produto.reviews[i];
  }
  const media = soma / produto.reviews.length;
  produto.averageRating = media;
});
console.log(inventory);

//10. Encontrar o produto com a maior média de avaliações

let melhorProduto = produtos[0]; // Começamos assumindo que o primeiro é o melhor
for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].averageRating > melhorProduto.averageRating) {
    melhorProduto = produtos[i]; // Atualizamos se achar um com média maior
  }
}
console.log("Produto com maior média:", melhorProduto);
