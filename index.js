console.log("Lista de productos nueva PhoneLino");

let productos = [
  {
    nombre: prompt("ingrese nombre de producto"),
    precio: Number(prompt("ingrese un precio")),
  },
  {
    nombre: prompt("ingrese nombre de producto"),
    precio: Number(prompt("ingrese un precio")),
  },
  {
    nombre: prompt("ingrese nombre de producto"),
    precio: Number(prompt("ingrese un precio")),
  },
];
console.log (productos)

let productosNuevos = {
  nombre: prompt("ingrese nombre de producto"),
  precio: Number(prompt("ingrese un precio")),
}
productos.push(productosNuevos);

console.log(productos);
