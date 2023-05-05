const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, nameToFind) => {
  return arr.some((name) => name === nameToFind);
};

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (people, minAge) => {
  return people.every((people) => people.age >= minAge);
};

// console.log(people.every((person) => person.age >= 10));
// console.log(verifyAges(people, 18));
// console.log(verifyAges(people, 14));

const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa, index) => {
  console.log(`Index: ${index}, Nome: ${pessoa.nome} Idade: ${pessoa.idade}`);
});

console.log(pessoas.find((pessoa) => pessoa.nome === 'Joana'));

console.log(pessoas.find((pessoa) => pessoa.idade === 57));

console.log(pessoas.some((pessoa) => pessoa.nome === 'Joana'));

console.log(pessoas.some((pessoa) => pessoa.idade >= 50));

console.log(pessoas.every((pessoa) => pessoa.idade >= 20));

console.log(pessoas.every((pessoa) => pessoa.idade <= 10));
