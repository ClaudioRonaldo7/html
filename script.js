let mostrador = document.getElementById("mostrador")
let seleccion = document.getElementById("seleccion")
let imgSeleccionada = document.getElementById("img")
let modeloSeleccionado = document.getElementById("modelo")
let descripSeleccionada = document.getElementById("descripcion")
let precioSeleccionado = document.getElementById("precio")

//funcion que carga la info de los item seleccionado
function cargar(item){
    quitarbordes();
    mostrador.style.width = "100%";/*mostrador hacia la derecha*/
    seleccion.style.width = "39%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripcion Del Modelo";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML
}
function quitarbordes(){
    var items = document.getElementsByClassName("item");
    for(i=0; i<items.length; i++){
    items[i].style.border = "none"; 
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0%";
    quitarbordes();
}