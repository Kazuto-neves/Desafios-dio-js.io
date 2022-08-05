const RESULT = document.getElementById("Result");
const NUMS = document.getElementById("array");

RESULT.addEventListener("click", ArrayPares);

function ArrayPares() {
  let response = document.getElementById("text");
  let arrayNumber = [];
  let arrayPar = [];
  let arrayN = [];
  arrayN = NUMS.value.split(/-+/);
  if (arrayN.length == 0) {
    response.innerText = "Array vazio [] = -1";
  } else {
    arrayNumber += "[ ";
    arrayPar += "[ ";
    for (let i = 0; i < arrayN.length; i++) {
      if (i == arrayN.length - 1) {
        if (arrayN[i] % 2 == 0) {
          arrayNumber += `${arrayN[i]}]`;
          arrayPar += "0]";
        } else {
          arrayNumber += `${arrayN[i]}]`;
          arrayPar += `${arrayN[i]}]`;
        }
      } else {
        if (arrayN[i] % 2 == 0) {
          arrayNumber += `${arrayN[i]} , `;
          arrayPar += "0 , ";
        } else {
          arrayNumber += `${arrayN[i]} , `;
          arrayPar += `${arrayN[i]} , `;
        }
      }
    }
  }
  response.innerText = `A lista de numeros composta por\n ${arrayNumber}\nonde os numeros pares\nsão represetados por 0 ficando assim\n ${arrayPar}`;
}
