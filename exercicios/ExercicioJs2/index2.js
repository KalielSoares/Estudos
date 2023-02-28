const nameA = prompt("nome");
const atk = prompt("ataque");

const nameD = prompt("nome");
let life = prompt("vida");
const defense = prompt("defesa");
const armor = prompt("armor");

let danoCausado = 0;

if (atk > defense && armor === "Não") {
  danoCausado = atk - defense;
} else if (atk > defense && armor === "Sim") {
  danoCausado = (atk - defense) / 2;
}

life -= danoCausado;

alert(nameA + " causou" + danoCausado + " pontos de dano " + nameD);
alert(
  nameA +
    "\nPoder de ataque: " +
    "\n\n" +
    nameD +
    "\nPontos de vida: " +
    life +
    "\nPoder de defesa: " +
    defense +
    "\nPossui escudo: " +
    armor
);
