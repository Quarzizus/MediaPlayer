import contenedorC from "./contenedor.js"
import autoRun from "./autoRun.js"

const cajitas = document.querySelectorAll(".cajas")
const contenedor = document.querySelector(".contenedor")
const boton = document.querySelector(".boton")
const contenedorPrueba = new contenedorC(
    {
    el:contenedor, 
    cajas: cajitas,
    plugins: [
        new autoRun(),
    ]

    }
)

// boton.onclick = () => contenedorPrueba.cambiarColor()


