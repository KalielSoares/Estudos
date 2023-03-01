let pilha = [];
let opcao = "";

do {
  let cartas = "";
  for (let i = 0; i < pilha.length; i++) {
    cartas += i + 1 + "º - " + pilha[i] + "\n";
  }

  opcao = prompt(
    "Baralho:\n" +
      cartas +
      "\nEscolha:\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      const newCard = prompt("Qual é o nome da nova carta a ser adicionada?");
      pilha.push(newCard);
      break;
    case "2":
      const pushCard = pilha.pop();
      if (!pushCard) {
        alert("Não há cartas para ser puxada, adicione mais!");
      } else {
        alert(pushCard + " foi removido da pilha.");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
