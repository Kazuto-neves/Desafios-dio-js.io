var resultTxt = document.getElementById("number");
const Cal = document.getElementById("cal");

Cal.addEventListener("click", calculadora);

// criando uma calculadora
function calculadora() {
  // definindo as operações e pegando valor de entrada do usuário
  // usamos "\n" para fazer uma quebra de linha
  let n1;
  const operacao = Number(
    prompt("Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)"));

  // verificando se a operação é válida
  if (!operacao || operacao >= 7) {
    alert("erro - operação inválida");
  } else {
    // definindo variáveis
    // todas as entradas devem ser do tipo number
    if (resultTxt.innerText.length != 0) {
      const continua = Number(prompt("Quer continuar com o calculo do resultado anterior?\n 1 - Sim\n 2 - Não"));
      continua == 1 ? (n1 = Number(resultTxt.innerText)) : (n1 = Number(prompt("Insira o primeiro valor:")));
    } else {
      n1 = Number(prompt("Insira o primeiro valor:"));
    }
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;

    // verificando se as variáveis são válidas
    if (!n1 || !n2) {
      alert("erro - parâmetros inválidos");
    } else {
      // definindo as funções
      function soma() {
        resultado = n1 + n2;

        // mostrando o resultado usando template strings
        /*alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();*/
        resultTxt.innerText = resultado;
      }

      function subtracao() {
        resultado = n1 - n2;
        resultTxt.innerText = resultado;
      }

      function multiplicacao() {
        resultado = n1 * n2;
        resultTxt.innerText = resultado;
      }

      function divisaoReal() {
        resultado = n1 / n2;
        resultTxt.innerText = resultado;
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        resultTxt.innerText = resultado;
      }

      function potenciacao() {
        resultado = n1 ** n2;
        resultTxt.innerText = resultado;
      }
    }
  }

  // usando switch case
  switch (operacao) {
    case 1:
      soma();
      break;
    case 2:
      subtracao();
      break;
    case 3:
      multiplicacao();
      break;
    case 4:
      divisaoReal();
      break;
    case 5:
      divisaoInteira();
      break;
    case 6:
      potenciacao();
      break;
  }
}
