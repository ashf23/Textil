const carrito = [];

function agregarAlCarrito(libro) {
  carrito.push(libro);
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";
  carrito.forEach((libro, index) => {
    const item = document.createElement("li");
    item.textContent = libro;
    lista.appendChild(item);
  });
}
