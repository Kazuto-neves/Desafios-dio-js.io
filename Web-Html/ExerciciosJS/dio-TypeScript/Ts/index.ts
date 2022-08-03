console.log("TypeScript");

function soma(a:number , b:number) {
    return a+b;
}

soma(1,2);

interface IAnimal {
    nome: string,
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
    emitirRugido(AlturaEmDecibes) :void
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false,
    emitirRugido: (AlturaEmDecibes) => {`${AlturaEmDecibes}`}
};

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false,
    emitirRugido: (AlturaEmDecibes) => {`${AlturaEmDecibes}`}
};

const animal2: IDomestico = {
    nome: 'cachorro',
    tipo: "terrestre",
    domestico: true,
    porte: "grande",
    emitirRugido: (AlturaEmDecibes) => {`${AlturaEmDecibes}`}
}

animal.emitirRugido(40);

const INPUT = document.getElementById("input") as HTMLInputElement;

INPUT.addEventListener('input',(event) => {
    const TEXT = event.currentTarget as HTMLInputElement;
    console.log(TEXT.value);
})

//generic type

function adicionaApendiceALista<T>(array:any[],valor:T) {
    return array.map(item => item + valor);
}

adicionaApendiceALista([1,2,3],1);

// verificar condição de paremetros numa função

/*interface IUsuario{
    nome: string,
    email: string,
}

interface IAdim extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: IUsuario | IAdim) {
    if ('cargo' in usuario) {
        //Redirecionar para a area de administração
    } else {
        //Redirecionar para a area de usuario
    }
}*/

// atributo opcional

interface IUsuario{
    nome: string,
    email: string,
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redireciona(usuario: IUsuario) {
    if (usuario.cargo) {
        //Redirecionar(usuario.cargo)
    } else {
        //Redirecionar para a area de usuario
    }
}

// propiedade private e readonly

interface Cachorro{
    nome: string,
    idade: number,
    parqueFavorito?: string,
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class meuCachorro implements CachorroSomenteLeitura{
    nome;
    idade;
    parqueFavorito;


    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}

const cao = new meuCachorro("Dask",2)

console.log(cao.nome,cao.idade);

//

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log("Chamou nova função");
    }
});

$('body').novaFuncao();


// 

export const numero = 2;

//

interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{}

const BRA:Brasileiro = {
    nome: "Christian",
    idade: 22
}

