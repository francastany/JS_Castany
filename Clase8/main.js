//D O M
/*
const parrafo1 = document.getElementById("parrafo1") //  Se puede usar ` ` 
// Devuelve ELEMENTO o devuelve NULL. DEVUELVE EL PRIMER ELEMENTO QUE TENGA ESE ID. (IGUAL Q EL FIND)
console.log(parrafo1);

const parrafos = document.getElementsByClassName('parrafos')[1] //El elemento con indice 1 de la clase Parrafos
//Devuelve un TIPO de Array. (HTML collection) No tiene los mismos metodos que un Array
console.log(parrafos);

const parrafosP = document.getElementsByTagName(`p`)[3]
// Todas las etiquetas P
console.log(parrafosP);

const user = {username: "Fran", password: "123"}
parrafo1.innerText = `Hola ${user.username}, buenos días...` //inserto texto en una etiquera
parrafos.innerHTML += "<p>Hola Coders</p>" //inserto una ETIQUETA HTML con texto (en este caso)
//Utilizo += para que se agregue, para que no se pisen los valores.
*/

class Producto {
    constructor(id, nombre, marca, precio, stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}
const producto1 = new Producto(1, "Yerba", "La yerbita", 400, 20)
const producto2 = new Producto(2, "Fideos", "Fidein", 100, 25)
const producto3 = new Producto(3, "Cafe", "Le Cafe", 500, 22)
const producto4 = new Producto(4, "Arroz", "Arrocin", 200, 15)
const producto5 = new Producto(5, "Lentejas", "Lentejin", 250, 30)

const productos = [producto1, producto2, producto3, producto4, producto5]

const divProductos = document.getElementById('productos')

productos.forEach(producto => {
    divProductos.innerHTML += `
    <div id="producto${producto.id}" class="producto">
        <p>Nombre: ${producto.nombre}</p>
        <p>Marca: ${producto.marca}</p>
        <p>Precio: $${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
    </div>
    `
})

