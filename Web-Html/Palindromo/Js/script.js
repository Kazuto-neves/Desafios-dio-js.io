const RESULT = document.getElementById("Result");
const TEXT = document.getElementById("phrase");

RESULT.addEventListener("click", Palindromo);

function verificador(text) {
  let rText;
  let lText;
  let sizeL = text.value.length - 1;
  let sizeR = 0;
    while (sizeR <= sizeL) {
      rText = text.value[sizeR].toLowerCase();
      lText = text.value[sizeL].toLowerCase();
      if (!(rText >= "a" && rText <= "z")) sizeR++;
      else if (!(lText >= "a" && lText <= "z")) sizeL--;
      else if (rText == lText) {
        sizeR++;
        sizeL--;
      } else return false;
    }
    return true;
}

function Palindromo() {
  let response = document.getElementById("text");
  if (TEXT.value.length === 0) return alert("não foi encontrado o texto");
  response.innerText = verificador(TEXT) ? "É um Palíndromo a frase" : "Não e um Palíndromo a frase";
}
