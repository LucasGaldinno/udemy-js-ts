// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Otávio',
//   idade: 25
// };

// const pessoa2 = {
//   nome: 'Maria',
//   sobrenome: 'Oliveira',
//   idade: 55
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// Esse parametro -> (nome, sobrenome, idade), recebe o argumento da constante pessoa1

// function criaPessoa (nome, sobrenome, idade) { // Essa função está me retornando um objeto inteiro
//   return {
//     // nome: nome,
//     // sobrenome: sobrenome, 
//     // idade: idade
//     nome, sobrenome, idade
//   };
// };

// const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa ('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa ('João', 'Moreira', 55);
// const pessoa4 = criaPessoa ('Junior', 'Lara', 44);
// const pessoa5 = criaPessoa ('Jean', 'Otávio', 69);

// console.log(pessoa1.nome, pessoa2.nome);


// Quando uma função está dentro de um objeto ela é chamada de método

const pessoa1 = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementoIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
