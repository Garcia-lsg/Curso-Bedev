// Exercícios:

/* Ex- 1 - Utilize a lista abaixo para exibir através do console.log o nome e a idade de todos os usuários, utilizando ForEach e Template String.

const usuarios = [{nome: 'Felipe Santana',idade: 26},{nome: 'Mateus Santana',idade: 25},{nome: 'Suzane Barbosa',idade: 24},{nome: 'Elias Camilo',idade: 55}] */
const usuarios = [
  { nome: "Felipe Santana", idade: 26 },
  { nome: "Mateus Santana", idade: 25 },
  { nome: "Suzane Barbosa", idade: 24 },
  { nome: "Elias Camilo", idade: 55 },
];

usuarios.forEach((item) => {
  console.log(`${item.nome} ${item.idade}`);
});

/* Ex- 2 - Utilize a lista de notas abaixo, para somar todas as notas e exibindo todos os final da soma.

const notas = [20, 20, 10, 12, 13, '10', '11', '33', '22', '3', 0, 2, 4, 0, 88, 191]
Pode ver que não são todos os itens que estão como Number, temos Strings nessa lista, é preciso utilizar o Number() dentro do  ForEach. */

const notas = [
  20,
  20,
  10,
  12,
  13,
  "10",
  "11",
  "33",
  "22",
  "3",
  0,
  2,
  4,
  0,
  88,
  191,
];

let somaDasNotas = 0;

notas.forEach((nota) => {
  somaDasNotas = somaDasNotas + Number(nota);
});

console.log(somaDasNotas);
