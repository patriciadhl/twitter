# Retos de Codigo: TWITTER #
En este repositorio se muestra como se creó de forma colaborativa, la funcionalidad basica de Twitter junto con sus estilos y maquetación en HTML y CSS.

## LINK DE EJERCICIO EN LMS
[LMS link](https://lms.laboratoria.la/cohorts/cdmx-2017-10-bc-core-am/courses/interactive-site/01-making-your-site-interactive/11-code-challenges)
 
- - - -
## Getting Started

<details>
    <summary><strong>Pasos Básicos antes de empezar a codear </strong></summary>
        <p>1. Vinculación de JS con HTML en parte inferior de Body </p>
        <p>2. Vinculación de CSS en HTML en el Head</p>
</details>


# Code Time #
## Javascript ###

### Pseudocódigo ### 
   1. Versión 0.0.1
        - Diseño de formulario general
        - Se agrega evento a botón.
        - Se agrega función para enviar mensaje a un nuevo parrafo y agregarlo a HTML.
    2. Version 0.0.2
        - Se agrega función `disabledButton`para desabilitar / habilitar botón de enviado de mensaje
        ```
        function disabledButton(){ //deshabilitar, habilitar boton
        if (document.getElementById("myTextarea").value===""){
            document.getElementById("btn").disabled = true;
        }else {
            document.getElementById("btn").disabled = false;
        }
        }
        ```
        - Se agrega función para contar caracteres de forma regresiva.
        ```
        function limit(){
        contTextArea=document.getElementById("myTextarea").value; //obtener mensaje
        ````
    3. Version 0.0.3
        - Especificación de condicional de limitacion de número de caracteres  
            - ( si es mayor a 140, se desabilita el borón de envio de mensaje).
            - si pasa de 120 caracteres, el contador se muestra de color naranja.
            ```
              if(parseInt(document.getElementById("caracteres").value)<=20){
            document.getElementById("caracteres").style.color="orange";
            ```
            - Si pasa los 130 caracteres, se muestra en rojo.
            ```
            if(parseInt(document.getElementById("caracteres").value)<=10){
            document.getElementById("caracteres").style.color="red";
            ````
            - Si pasa los 140, el contador se muestra en negativo.
    4. Version 4.
        - Se redimensiona el área de texto.
        ```
        var autoajustar=document.getElementById("myTextarea");
        autoajustar.onkeydown=function()
        ```
    5. Versión 5
        - Si la cantidad de cáracteres ingresados supera el tam del area, no se muestra el scroll.

    6. Versión 6
        - Se agrega la hora en que se publico el tweet.
        ```
        var d = new Date();
        ```
    

## HTML / CSS ##

