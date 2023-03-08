function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"));
  const altura = parseFloat(prompt("Informe a altura do triângulo:"));
  return (base * altura) / 2;
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"));
  const altura = parseFloat(prompt("Informe a altura do retângulo:"));
  return base * altura;
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"));
  return lado * lado;
}

function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const altura = parseFloat(prompt("Informe a altura do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"));
  return 3.14 * raio * raio;
}

function menu() {
  return prompt(
    "Calculadora Geometrica" +
      "\nEscolha:\n1 - Área do triângulo: \n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio: \n5 - Área do circulo:\n6 - Sair"
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = menu();
    let resultado;
    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;

      default:
        alert("Opção inválida!");
        break;
    }

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
