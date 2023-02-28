const value = prompt("Digite um valor em metros");
const valueNumber = parseFloat(value);

const conversor = prompt(
  "Para qual medida você quer converter? \nA) Milimetros(mm) \nB)centimetros(cm) \nC)decimetro(dm) \nD)decametro(dam) \nE)hectometro(hm) \nF)quilometro(km)"
);

switch (conversor) {
  case "A":
    alert(valueNumber * 1000 + "mm");
    break;

  case "B":
    alert(valueNumber * 100 + "cm");
    break;
  case "C":
    alert(valueNumber * 10 + "dm");
    break;
  case "D":
    alert(valueNumber / 10 + "dam");
    break;
  case "E":
    alert(valueNumber / 100 + "hm");
    break;
  case "F":
    alert(valueNumber / 1000 + "km");
    break;
  default:
    alert("opção invalida");
}
