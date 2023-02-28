let nome = window.prompt("Digite seu nome:");
let sobrenome = window.prompt("Digite seu sobrenome:");
let estudo = window.prompt("Digite o campo de estudo:");
let anoNasc = window.prompt("Digite o ano de nascimento:");

data = new Date();

let idade = 2023 - anoNasc;

let nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto, "Estuda " + estudo, "e a sua idade é de:" + idade);
