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
