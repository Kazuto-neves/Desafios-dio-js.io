var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
let minRange = document.getElementById('min').value;
let maxRange = document.getElementById('max').value;

const elementDOWN = document.getElementById("subtrair");
const elementUP = document.getElementById("adicionar");

elementDOWN.addEventListener("click", decrement);
elementUP.addEventListener("click", increment);

function valid(x){
    if(x>=minRange && x<=maxRange){
        return true;
    }else{
        return false;
    }
}

function color(x){
    x<0?currentNumberWrapper.style.cssText = "color: red":currentNumberWrapper.style.cssText = "color: blue";
}

function increment(){
    currentNumber+=1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(valid(currentNumber)==false){
        alert("Erro\nvocê está fugindo do range estabelecido favor rever o numero maior e o menor");
        currentNumber-=1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    color(currentNumber);
}

function decrement(){
    currentNumber-=1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(valid(currentNumber)==false){
        alert("Erro\nvocê está fugindo do range estabelecido favor rever o numero maior e o menor");
        currentNumber+=1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    color(currentNumber);
}