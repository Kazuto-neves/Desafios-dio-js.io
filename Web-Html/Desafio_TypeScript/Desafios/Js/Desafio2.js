"use strict";
// Como podemos melhorar o esse código usando TS? 
/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/
var IMPUT = document.getElementById("add");
IMPUT.addEventListener('click', addPessoa);
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    Object.defineProperty(Pessoa.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getIdade", {
        get: function () {
            return this.idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "getProfissao", {
        get: function () {
            return this.profissao;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
function addPessoa() {
    var NOME = document.getElementById("name");
    var IDADE = document.getElementById("age");
    var PROFISSAO = document.getElementById("profession");
    if (NOME.value.length !== 0 || IDADE.value.length !== 0 || PROFISSAO.value.length !== 0) {
        if ((/([0-9]+)/g.exec(IDADE.value))) {
            Tbody(NOME.value, Number(IDADE.value), PROFISSAO.value);
        }
        else {
            alert("o ".concat(IDADE.value, " n\u00E3o e um numero"));
        }
    }
    else {
        alert("existe campo vazio");
    }
}
function oldPessoa() {
    var pessoa1 = new Pessoa("maria", 29, "atriz");
    Tbody(pessoa1.getNome, pessoa1.getIdade, pessoa1.getProfissao);
    var pessoa2 = new Pessoa("roberto", 19, "Padeiro");
    Tbody(pessoa2.getNome, pessoa2.getIdade, pessoa2.getProfissao);
    var pessoa3 = new Pessoa("laura", 32, "Atriz");
    Tbody(pessoa3.getNome, pessoa3.getIdade, pessoa3.getProfissao);
    var pessoa4 = new Pessoa("carlos", 19, "padeiro");
    Tbody(pessoa4.getNome, pessoa4.getIdade, pessoa4.getProfissao);
}
function Tbody(nome, idade, profissao) {
    var TBODY = document.getElementById('body');
    var LINHA = document.createElement('tr');
    var NOME = document.createElement('td');
    var IDADE = document.createElement('td');
    var PROFISSAO = document.createElement('td');
    NOME.setAttribute("class", "cells");
    NOME.innerText = nome;
    IDADE.setAttribute("class", "cells");
    IDADE.innerText = idade.toString();
    PROFISSAO.setAttribute("class", "cells");
    PROFISSAO.innerText = profissao;
    LINHA.setAttribute("class", "rows");
    LINHA.appendChild(NOME);
    LINHA.appendChild(IDADE);
    LINHA.appendChild(PROFISSAO);
    TBODY.appendChild(LINHA);
}
oldPessoa();
