// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let heroiNome = "Vinicius";
let heroiXp = 10001;
let niveis = [
  ["Ferro", 0],
  ["Bronze", 1001],
  ["Prata", 2001],
  ["Ouro", 5001],
  ["Platina", 7001],
  ["Ascendente", 8001],
  ["Imortal", 9001],
  ["Radiante", 10001],
];

for (let i = 0; i < niveis.length; i++) {
  if (
    i === niveis.length - 1 ||
    (heroiXp >= niveis[i][1] && heroiXp < niveis[i + 1][1])
  ) {
    console.log(
      `O Herói de nome ${heroiNome} está no nível de ${niveis[i][0]}`
    );
    break;
  }
}
