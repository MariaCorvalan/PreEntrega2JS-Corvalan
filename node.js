const productos = [
    { nombre: "Harinas", precio: 50 },
    { nombre: "Galletitas", precio: 100 },
    { nombre: "Cervezas", precio: 150 },
    { nombre: "Lacteos", precio: 200 },
    { nombre: "Gaseosas", precio: 250 },
  ];
  let carrito = [];
  
  let seleccion = prompt("Hola, desea comprar algún producto?");
  
  while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese si o no");
    seleccion = prompt("Hola desea comprar algo si o no");
  }
  
  if (seleccion == "si") {
    alert("A continuación nuestra lista de productos");
    let todoslosProductos = productos.map(
      (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "));
  } else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto!!");
  }
  
  while (seleccion != "no") {
    let producto = prompt("Agregá un producto a tu carrito");
    let precio = 0;
  
    if (
      producto == "Harinas" ||
      producto == "Galletitas" ||
      producto == "Cervezas" ||
      producto == "Lacteos" ||
      producto == "Gaseosas"
    ) {
      switch (producto) {
        case "Harinas":
          precio = 50;
          break;
        case "Galletitas":
          precio = 100;
          break;
        case "Cervezas":
          precio = 150;
          break;
        case "Lacteos":
          precio = 200;
          break;
        case "Gaseosas":
          precio = 250;
          break;
        default:
          break;
      }
      let unidades = parseInt(prompt("Cuántas unidades quiere llevar?"));
  
      carrito.push({ producto, unidades, precio });
      console.log(carrito);
    } else {
      alert("No tenemos ese producto en stock");
    }
  
    seleccion = prompt("Desea comprar algo más?");
  
    seleccion = prompt("Desea comprar algo más?");

    while (seleccion === "no") {
      alert("Gracias por su compra! Hasta pronto");
      carrito.forEach((carritoFinal) => {
        console.log(
          `producto: ${carritoFinal.producto}, unidades: ${
            carritoFinal.unidades
          }, Total a pagar por producto ${
            carritoFinal.unidades * carritoFinal.precio
          }`
        );
      });
      break;
    }
  }
  
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`El total a pagar por su compra es: ${total}`);