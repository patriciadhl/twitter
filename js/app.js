function disabledButton(){ //deshabilitar, habilitar boton
  if (document.getElementById("myTextarea").value===""){
    document.getElementById("btn").disabled = true;
  }else {
    document.getElementById("btn").disabled = false;
  }
}


function myFunction() {
    var d = new Date();
    var x = document.getElementById("myTextarea").value;//obteniendo valor de textarea
    var element=document.createElement('p');//creando parrafo
    var text=document.createTextNode(x +'\n'+ d.getHours()+':'+ d.getMinutes() );
    element.appendChild(text); //agregando texto a parrafo
    document.getElementById("demo").appendChild(element); //agregando parrafo a html
    document.getElementById("myTextarea").value="";
    disabledButton();
}

var contTextArea="";
var limitCar=140;

function maximo(){
  contTextArea=document.getElementById("myTextarea").value;
  document.getElementById("caracteres").style.color="#000000";
  cuenta();
}

function cuenta(){
  document.getElementById("caracteres").value=limitCar-(document.getElementById("myTextarea").value.length);
  if(parseInt(document.getElementById("caracteres").value)<1){
    document.getElementById("btn").disabled = true;
  }else {
    document.getElementById("btn").disabled = false;
  }
  if(parseInt(document.getElementById("caracteres").value)<=20){
    document.getElementById("caracteres").style.color="orange";
  }
  if(parseInt(document.getElementById("caracteres").value)<=10){
    document.getElementById("caracteres").style.color="red";
  }
}
