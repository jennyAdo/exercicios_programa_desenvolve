# Exercício 01 - Primeiros Passos com Node.js

Crie um arquivo hello.js com o seguinte conteúdo:

```
// Meu primeiro script Node.js
console.log("Hello, Node.js!");
console.log("Node.js version:", process.version);
console.log("Current directory:", process.cwd());
```

Executar o arquivo no terminal:

```
node hello.js
```

O que aconteceu? O que é o objeto process? Como isso difere do JavaScript no navegador?

- O Node.js executou o arquivo JavaScript no ambiente de tempo de execução do Node (fora do navegador). Ele imprimiu no console:
  A mensagem "Hello, Node.js!"
  A versão do Node.js que está rodando (process.version)
  O diretório atual onde o comando foi executado (process.cwd())

[Process](https://nodejs.org/api/process.html)
