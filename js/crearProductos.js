import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formumario]")

async function crearproductos(evento) {
    evento.preventDefault();
    const nombre = await document.querySelector("[data-nombre]").value;
    const precio = await document.querySelector("[data-precio]").value;
    const imagen = await document.querySelector("[data-imagen]").value;

    try {
        await conexionAPI.crearProducto(nombre, precio, imagen);
    } catch (e) {
        alert(e);
    }
}
formulario.addEventListener("submit", evento => crearproductos(evento));

export { crearproductos }   