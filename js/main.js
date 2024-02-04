const botones = document.getElementsByClassName("boton")

let arrayBotones = Array.from(botones)

arrayBotones.map(
    item => {
        item.addEventListener("click", (evento) => {
            pantalla.classList.remove(pantalla.classList[pantalla.classList.length - 1])
            pantalla.classList.add("canal" + evento.target.id.slice(-1))
        })
    }
)


