let productos = [];

let nombre = document.getElementById("nombre");
let nombreCientifico = document.getElementById("nombreCientifico");
let producto = document.getElementById("tipo");
let cuidados = document.getElementById("cuidados");
let precio = document.getElementById("precio");
let stock = document.getElementById("stock");
let mensaje = document.getElementById("msj");

let botonCargar = document.getElementById("btnCargar");

botonCargar.addEventListener("click", function () {

    let nuevoProducto = {
        nombre: nombre.value,
        nombreCientifico: nombreCientifico.value,
        tipo: producto.value,
        cuidados: cuidados.value,
        precio: precio.value,
        stock: stock.value
    };
    productos.push(nuevoProducto);

    console.log(productos);

    let mensajeCompleto = "Cargaste un " + nombre.value + ", su nombre científico es " + nombreCientifico.value + ", es un producto de tipo " + producto.value + ", tiene algunos cuidados como: " + cuidados.value + ", tiene un precio de: " + precio.value + ", Como ultimo, este producto tiene un stock de: " + stock.value + " unidades.";

    console.log(mensajeCompleto)
    mensaje.innerHTML += mensajeCompleto + "<br>";

});