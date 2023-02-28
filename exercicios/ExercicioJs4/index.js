const name = prompt("Digite o nome do turista:");
const answer = prompt("Ja visitou alguma cidade?(Sim/Não)");

let contagem = 0;
let city = "";

while (answer === "Sim") {
  let city = prompt("Qual o nome da cidade?");
  city += "-" + city + "\n";
  contagem++;
  answer = prompt("Você visitou alguma outra cidade? (Sim/Não)");
  if (answer === "Não") {
    break;
  }
}

alert(
  "Turista: " +
    name +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas:\n" +
    city
);
