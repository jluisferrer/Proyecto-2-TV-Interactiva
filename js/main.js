let powerOn = false;  //declarar variable 'powerOn' con condicion 'false'

function encendido() {    //declarar la funcion 'encendido' se ejecutará cuando se realice "onclick" encendido/apagado
    const pantalla = document.getElementById('pantalla'); //Se declara una constante llamada pantalla y se le asigna el elemento HTML que tiene el id "pantalla" 
    if (powerOn) {  //si 'powerOn' es 'true'
        powerOn = false; // se establece en 'false'
        pantalla.innerHTML = ''; // se borra el contendido HTML dentro del elemento con id "pantalla"
        pantalla.innerHTML = `<img id="tv-on-image" src="./img/tv-off.png" alt="Televisión apagada">`; //se inserta nuevo contendido HTML dentro del elemento "pantalla", una imagen
    } else { //si lo anterior es 'false' es decir esta encendida
        powerOn = true; //powerOn es 'true'
        pantalla.innerHTML = ''; // se borra el contendido HTML dentro del elemento con id "pantalla"
        pantalla.innerHTML = `<img id="tv-on-image" src="./img/tv-on.png" alt="Televisión encendida">`; //se inserta nuevo contendido HTML dentro del elemento "pantalla", una imagen
        
    }
}

const botones = document.getElementsByClassName("boton1"); //se seleccionan todos los elementos HTML que tienen la clase "boton1" y se almacenan en la variable botones. getElementsByClassName se le asocia la clase boton1
let arrayBotones = Array.from(botones); //Se convierte la colección de botones en un array utilizando Array.from()

arrayBotones.map(item => { //se utiliza el método map para iterar sobre cada elemento del array de botones.
    item.addEventListener("click", (evento) => { //Se agrega un event listener a cada botón, cuando "click", se ejecutará 
        if (powerOn) { //si powerOn es 'true'
            const pantalla = document.getElementById('pantalla'); //se obtiene el elemento con el id "pantalla" y se almacena en la variable pantalla.
            pantalla.innerHTML = `<img id="tv-on-image" src="./img/canal${evento.target.id.slice(-1)}.jpg" alt="Canal ${evento.target.id.slice(-1)}">`; //se actualiza el contenido HTMl del elemento"pantalla" para insertar imagen desde su ruta seguido del último caracter del id del boton que desencadena el evento, también extrae el último carácter del boton que se hizo click

        }
    });
});




























// const botones = document.getElementsByClassName("boton1")

// let arrayBotones = Array.from(botones)

// arrayBotones.map(
//     item => {
//         item.addEventListener("click", (evento) => {
//             pantalla.classList.remove(pantalla.classList[pantalla.classList.length - 1])
//             pantalla.classList.add("canal" + evento.target.id.slice(-1))
//         })
//     }
// )


