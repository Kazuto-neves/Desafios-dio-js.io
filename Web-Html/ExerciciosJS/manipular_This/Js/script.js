function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Christian',
	idade: 22,
};

const pessoa2 = {
	nome: 'Rodolpho',
	idade: 20,
};

const pessoa3 = {
	nome: 'Lucy',
	idade: 0,
};

(function() {
    alert(calculaIdade.call(pessoa3, 40));
	alert(calculaIdade.apply(pessoa2, [24]));
 }) () //Invocação da função