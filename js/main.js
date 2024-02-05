let powerOn = false;  //declarar variable 'powerOn' con condicion 'false'

function encendido() {    //declarar la funcion 'encendido' se ejecutará cuando se realice alguna acción encendido/apagado
    const pantalla = document.getElementById('pantalla'); //Se declara una constante llamada pantalla y se le asigna el elemento HTML que tiene el id "pantalla" 
    if (powerOn) {  //si 'powerOn' es 'true'
        powerOn = false; // se establece en 'false'
        pantalla.innerHTML = ''; // se borra el contendido HTML dentro del elemento con id "pantalla"
        pantalla.innerHTML = `<img id="tv-on-image" src="./img/tv-off.png" alt="Televisión apagada">`; //se inserta nuevo contendido HTML dentro del elemento "pantalla", una imagen
    } else { //si lo anterior es 'false' es decir esta apagada
        powerOn = true; //powerOn es 'true'
        pantalla.innerHTML = ''; // se borra el contendido HTML dentro del elemento con id "pantalla"
        pantalla.innerHTML = `<img id="tv-on-image" src="./img/tv-on.png" alt="Televisión encendida">`; //se inserta nuevo contendido HTML dentro del elemento "pantalla", una imagen
        
    }
}

































const botones = document.getElementsByClassName("boton1")

let arrayBotones = Array.from(botones)

arrayBotones.map(
    item => {
        item.addEventListener("click", (evento) => {
            pantalla.classList.remove(pantalla.classList[pantalla.classList.length - 1])
            pantalla.classList.add("canal" + evento.target.id.slice(-1))
        })
    }
)


