function disabledButton(){ //deshabilitar, habilitar boton
  if (document.getElementById("myTextarea").value===""){
    document.getElementById("btn").disabled = true;
  }else {
    document.getElementById("btn").disabled = false;
  }
}

var send=document.getElementById("btn");
send.onclick = function() { //funcion para enviar mensaje a nuevo parrafo
    var d = new Date();
    var x = document.getElementById("myTextarea").value;//obteniendo valor de textarea
    var element=document.createElement('p');//creando parrafo
    var text=document.createTextNode(x +'\n'+ d.getHours()+':'+ d.getMinutes() );
    element.appendChild(text); //agregando texto a parrafo
    document.getElementById("section-msg").appendChild(element); //agregando parrafo a html
    document.getElementById("myTextarea").value="";
    document.getElementById("myTextarea").style.height='30px';
    document.getElementById("caracteres").value="140";
    document.getElementById("caracteres").style.color="#000000"
    disabledButton();
}
//limitar numero de caracteres a 140
var contTextArea="";
var limitCar=140;

function limit(){
  contTextArea=document.getElementById("myTextarea").value; //obtener mensaje
  document.getElementById("caracteres").style.color="#000000"
  document.getElementById("caracteres").value=limitCar-(contTextArea.length);
  if(parseInt(document.getElementById("caracteres").value)<1){
    document.getElementById("btn").disabled = true;
  }
  if(parseInt(document.getElementById("caracteres").value)<=20){
    document.getElementById("caracteres").style.color="orange";
  }
  if(parseInt(document.getElementById("caracteres").value)<=10){
    document.getElementById("caracteres").style.color="red";
  }
}
//ajustar area de texto a contenido
var autoajustar=document.getElementById("myTextarea");
autoajustar.onkeydown=function() {
    var texto=document.getElementById("myTextarea");
    var txt=texto.value;
    var tamano=txt.length+30;
    texto.style.height=tamano+"px";
    if(parseInt(document.getElementById("caracteres").value)<1){
      document.getElementById("btn").disabled = true;
    }else {
      document.getElementById("btn").disabled = false;
    }
}
