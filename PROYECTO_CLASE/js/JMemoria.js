const url1 = [
    "/Imagenes/Rick1.png",
    "/Imagenes/Rick2.png",
    "/Imagenes/Rick3.png",
    "/Imagenes/Rick4.png",
    "/Imagenes/alien5.png",
    "/Imagenes/nave1.png",
    "/Imagenes/nave2.png",
    "/Imagenes/nave3.png",
    "/Imagenes/nave4.png",
    "/Imagenes/nave5.png",
];
const celda = `<span class="celda"><img src="${url1[4]} alt="" class="IMG" /></span>`;
const fila = `<section class="fila">
        <span class="celda"><img src="${url1[0]} alt="" class="IMG" /></span>
        <img src="${url1[1]} alt="" class="IMG" /></span>
        <img src="${url1[2]} alt="" class="IMG" /></span>
        <img src="${url1[3]} alt="" class="IMG" /></span>
        <img src="${url1[4]} alt="" class="IMG" /></span>
        <img src="${url1[5]} alt="" class="IMG" /></span>
        </section>`;
    
let f1 = document.getElementById("mtablero")
    document.getElementById("mtablero").addEventListener("click",llenarfila);
    console.log(f1);
    function prueba(){
        alert("En Funcion");
    }
    function llenarfila(){
        let texto = document.getElementById("mtablero");
        console.log(fila);
        for (i = 1; i < 5; i++){
            texto.innerHTML = fila;
        }
    }
    function llenarcelda(){
        for (var i = 0; i < 5; i++){
             let texto = document.getElementById("mtablero");
             texto.innerHTML = celda;
        }
    }

    var texto= document.getElementById("fila");
    var p1= document.getElementById("section");
    p1.innerHTML= celda;
    texto.appendChild(p1);
 
    function numeroaleatorio(){
        numero = Math.random()*10;
    }