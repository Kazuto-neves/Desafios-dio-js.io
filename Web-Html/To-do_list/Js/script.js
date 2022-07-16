function addRotina(){
    var n=1;
    document.getElementById("btnRotina").addEventListener("click",function(){
        var lista=document.getElementById("ListRotina");
        var Rotina=document.getElementById("textRotina");
        var checkbox=document.createElement("input");
        var texto=document.createElement("label");
        checkbox.type="checkbox";
        checkbox.setAttribute("class","rotina");
        checkbox.setAttribute("id","id"+n.toString());
        texto.setAttribute("class","lRotina");
        texto.setAttribute("for","id"+n.toString());
        texto.textContent=Rotina.value;
        lista.appendChild(checkbox);
        lista.appendChild(texto);
        Rotina.value="";
        Rotina.focus();
        n++;
    })
}