"use strict";
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
/*let employee = {};
employee.code = 10;
employee.name = "John";*/
var RESULT = document.getElementById("result");
RESULT.addEventListener('click', OUT);
var employee = /** @class */ (function () {
    function employee(code, nome) {
        this.code = code;
        this.nome = nome;
    }
    return employee;
}());
function OUT() {
    var cod = document.getElementById("cod");
    var name = document.getElementById("name");
    var result = document.getElementById("text");
    var EMPLOYEE = new employee(Number(cod.value), name.value);
    var TEXT = "Seu nome e ".concat(EMPLOYEE.nome, "\nseu codigo e ").concat(EMPLOYEE.code);
    result.innerHTML = TEXT;
    console.log(TEXT);
}
