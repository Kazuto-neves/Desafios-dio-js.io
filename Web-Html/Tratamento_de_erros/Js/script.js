function validaArray(array,num){
    try {
        if (!array && !num) throw new ReferenceError("Envie a lista e o numero");

        if (typeof array !== 'object') throw new TypeError("A lista precisa ser do tipo Object");

        if (typeof num !== 'number') throw new TypeError("O numero precisa ser do tipo Number");

        if (array.length !== num) throw new RangeError("Você definiu um numero que utrapassa o tamanho da lista");

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) alert(`Ocorreu um ReferenceError ${error.message}`);

        else if (error instanceof TypeError) alert(`Ocorreu um TypeError ${error.message}`);

        else if (error instanceof RangeError) alert(`Ocorreu um RangeError ${error.message}`);

        else alert(`Ocorreu um Erro inesperado ${error}`);

    }
}

function start(){
    const ARRAY = [9,2,5,8];
    const NUM = 4;

    alert(validaArray());
    alert(validaArray(5,5));
    alert(validaArray(ARRAY,"a"));
    alert(validaArray(ARRAY,99));
    alert(validaArray(ARRAY,NUM));
}