const precio = 400000;
let cantidad = 0;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

function actualizarTotal() {
    totalSpan.innerHTML = precio * cantidad;
}

function agregar() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

function restar() {
    cantidad = (cantidad - 1) * (cantidad > 0);
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}