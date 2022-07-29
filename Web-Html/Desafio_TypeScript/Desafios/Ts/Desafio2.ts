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
const IMPUT = document.getElementById("add") as HTMLInputElement

IMPUT.addEventListener('click',addPessoa)

class Pessoa{
    private nome: string
    private idade: number
    private profissao: string

    constructor(nome:string,idade:number,profissao:string){
        this.nome=nome;
        this.idade=idade;
        this.profissao=profissao;
    }

    public get getNome() : string {
        return this.nome;
    }

    public get getIdade() : number {
        return this.idade
    }
    
    public get getProfissao() : string {
        return this.profissao;
    }
}

function addPessoa(){
    const NOME = document.getElementById("name") as HTMLInputElement
    const IDADE = document.getElementById("age") as HTMLInputElement
    const PROFISSAO = document.getElementById("profession") as HTMLInputElement

    if(NOME.value.length !== 0 || IDADE.value.length !== 0 || PROFISSAO.value.length !== 0){
        if((/([0-9]+)/g.exec(IDADE.value))){
            Tbody(NOME.value,Number(IDADE.value),PROFISSAO.value)
        }else{
            alert(`o ${IDADE.value} não e um numero`);
        }
    }else{
        alert(`existe campo vazio`);
    }
}

function oldPessoa(){
    const pessoa1 = new Pessoa("maria",29,"atriz");
    Tbody(pessoa1.getNome,pessoa1.getIdade,pessoa1.getProfissao);

    const pessoa2 = new Pessoa("roberto",19,"Padeiro");
    Tbody(pessoa2.getNome,pessoa2.getIdade,pessoa2.getProfissao);

    const pessoa3 = new Pessoa("laura",32,"Atriz");
    Tbody(pessoa3.getNome,pessoa3.getIdade,pessoa3.getProfissao);

    const pessoa4 = new Pessoa("carlos",19,"padeiro");
    Tbody(pessoa4.getNome,pessoa4.getIdade,pessoa4.getProfissao);


}

function Tbody(nome:string,idade:number,profissao:string){
    const TBODY = document.getElementById('body') as HTMLTableSectionElement
	const LINHA = document.createElement('tr') as HTMLTableRowElement
	const NOME = document.createElement('td') as HTMLTableCellElement
	const IDADE = document.createElement('td') as HTMLTableCellElement
	const PROFISSAO = document.createElement('td') as HTMLTableCellElement

    NOME.setAttribute("class","cells");
    NOME.innerText = nome;

    IDADE.setAttribute("class","cells");
    IDADE.innerText = idade.toString();

    PROFISSAO.setAttribute("class","cells");
    PROFISSAO.innerText = profissao;

    LINHA.setAttribute("class","rows")
    LINHA.appendChild(NOME);
    LINHA.appendChild(IDADE);
    LINHA.appendChild(PROFISSAO);

    TBODY.appendChild(LINHA);
}

oldPessoa();