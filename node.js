const productos = [
  { nombre: "Harinas", precio: 50 },
  { nombre: "Galletitas", precio: 100 },
  { nombre: "Cervezas", precio: 150 },
  { nombre: "Lacteos", precio: 200 },
  { nombre: "Gaseosas", precio: 250 },
];

let carrito = [];

function mostrarProductos() {
  alert("A continuación nuestra lista de productos");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" - "));
}

function agregarProductoAlCarrito(producto, unidades) {
  let item = productos.find((p) => p.nombre === producto);
  if (item) {
    carrito.push({ producto: item.nombre, unidades, precio: item.precio });
    console.log(carrito);
  } else {
    alert("No tenemos ese producto en stock");
  }
}

function mostrarDetalleCompra() {
  console.log("Detalle de la compra:");
  carrito.forEach((carritoFinal) => {
    console.log(
      `Producto: ${carritoFinal.producto}, Unidades: ${
        carritoFinal.unidades
      }, Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`
    );
  });
}

let seleccion = prompt("Hola, ¿desea comprar algún producto?");

while (seleccion !== "si" && seleccion !== "no") {
  alert("Por favor, ingrese 'si' o 'no'");
  seleccion = prompt("Hola, ¿desea comprar algo, sí o no?");
}

if (seleccion === "si") {
  mostrarProductos();
} else if (seleccion === "no") {
  alert("Gracias por venir, ¡hasta pronto!");
}

while (seleccion === "si") {
  let producto = prompt("Agregá un producto a tu carrito");
  let unidades = 0;

  if (productos.some((p) => p.nombre === producto)) {
    unidades = parseInt(prompt("Cuántas unidades quiere llevar?"));
    agregarProductoAlCarrito(producto, unidades);
  } else {
    alert("No tenemos ese producto en stock");
  }

  seleccion = prompt("Desea comprar algo más? (si/no)");
}

if (carrito.length > 0) {
  mostrarDetalleCompra();
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`El total a pagar por su compra es: ${total}`);
} else {
  console.log("No se agregaron productos al carrito. Hasta pronto!");
}
