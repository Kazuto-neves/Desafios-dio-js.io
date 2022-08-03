var resultTxt = document.getElementById("number");
const comp = document.getElementById("Comp");

comp.addEventListener("click", operacao);

function operacao() {
  let valor1 = document.getElementById("Valor1");
  let valor2 = document.getElementById("Valor2");
  let v1 = document.getElementById("v1");
  let v2 = document.getElementById("v2");
  v1.innerText=valor1.value;
  v2.innerText=valor2.value;
  soma(valor1.value,valor2.value);
  subtracao(valor1.value,valor2.value);
  multiplicacao(valor1.value,valor2.value);
  divisaoReal(valor1.value,valor2.value);
  divisaoInteira(valor1.value,valor2.value);
  potenciacao(valor1.value,valor2.value);
  igual(valor1.value,valor2.value);
}

function soma(n1,n2) {
  let Soma = document.getElementById("v1+v2");
  let Mm = document.getElementById("soma");
  let resultado = n1 + n2;
  let comparaDez = 'menor';
	let comparaVinte = 'menor';
  Soma.innerText= `${n1}+${n2}=${resultado}`;
  if (resultado > 10) {
		comparaDez = 'maior';
	}
	if (resultado > 20) {
		comparaVinte = 'maior';
	}
  Mm.innerText=`Sua soma é ${resultado}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function subtracao(n1,n2) {
  let Subtracao = document.getElementById("v1-v2");
  let Mm = document.getElementById("subtracao");
  let resultado = n1 - n2;
  let comparaDez = 'menor';
	let comparaVinte = 'menor';
  Subtracao.innerText= `${n1}-${n2}=${resultado}`;
  if (resultado > 10) {
		comparaDez = 'maior';
	}
	if (resultado > 20) {
		comparaVinte = 'maior';
	}
  Mm.innerText=`Sua subtracao é ${resultado}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function multiplicacao(n1,n2) {
  let Multiplicacao = document.getElementById("v1*v2");
  let Mm = document.getElementById("multiplicacao");
  let resultado = n1 * n2;
  let comparaDez = 'menor';
	let comparaVinte = 'menor';
  Multiplicacao.innerText= `${n1}*${n2}=${resultado}`;
  if (resultado > 10) {
		comparaDez = 'maior';
	}
	if (resultado > 20) {
		comparaVinte = 'maior';
	}
  Mm.innerText=`Sua multiplicacão é ${resultado}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function divisaoReal(n1,n2) {
  let DivisaoReal = document.getElementById("v1/v2");
  let Mm = document.getElementById("divisaoReal");
  let resultado = n1 / n2;
  let comparaDez = 'menor';
	let comparaVinte = 'menor';
  DivisaoReal.innerText= `${n1}/${n2}=${resultado}`;
  if (resultado > 10) {
		comparaDez = 'maior';
	}
	if (resultado > 20) {
		comparaVinte = 'maior';
	}
  Mm.innerText=`Sua divisão Real é ${resultado}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function divisaoInteira(n1,n2) {
  let DivisaoInteira = document.getElementById("v1%v2");
  let Mm = document.getElementById("divisaoInteira");
  let resultado = n1 % n2;
  let comparaDez = 'menor';
	let comparaVinte = 'menor';
  DivisaoInteira.innerText= `${n1}%${n2}=${resultado}`;
  if (resultado > 10) {
		comparaDez = 'maior';
	}
	if (resultado > 20) {
		comparaVinte = 'maior';
	}
  Mm.innerText=`Sua divisão Inteira é ${resultado}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function potenciacao(n1,n2) {
  let Potenciacao = document.getElementById("v1**v2");
  let Mm = document.getElementById("potenciacao");
  let resultado = n1 ** n2;
  let comparaDez = 'menor';
	let comparaVinte = 'menor';
  Potenciacao.innerText= `${n1}^${n2}=${resultado}`;
  if (resultado > 10) {
		comparaDez = 'maior';
	}
	if (resultado > 20) {
		comparaVinte = 'maior';
	}
  Mm.innerText=`Sua potenciacão é ${resultado}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

function igual(n1,n2){
  let Igual = document.getElementById("igual");
  return n1===n2?Igual.innerText=`Os numeros ${n1} e ${n2} são iguais`:Igual.innerText=`Os numeros ${n1} e ${n2} não são iguais`;
}