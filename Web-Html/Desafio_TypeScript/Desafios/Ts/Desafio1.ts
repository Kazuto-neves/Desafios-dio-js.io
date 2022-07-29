// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*let employee = {};
employee.code = 10;
employee.name = "John";*/

const RESULT = document.getElementById("result") as HTMLInputElement

RESULT.addEventListener('click',OUT)

interface Iemployee {
    code: number,
    nome: string
}

class employee implements Iemployee{
    code: number;
    nome: string;

    constructor(code:number,nome:string){
        this.code=code;
        this.nome=nome;
    }
}

function OUT(){
    let cod = document.getElementById("cod") as HTMLInputElement;
    let name = document.getElementById("name") as HTMLInputElement;
    let result = document.getElementById("text") as HTMLSpanElement
    const EMPLOYEE = new employee (Number(cod.value),name.value);
    const TEXT =`Seu nome e ${EMPLOYEE.nome}\nseu codigo e ${EMPLOYEE.code}`;
    result.innerHTML = TEXT;
    console.log(TEXT)
}