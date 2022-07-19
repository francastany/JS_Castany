// Storage y JSON - Clase 10
// Guardar informacion --> no tenemos bases de datos. Informacion que se guarda en un archivo dentro de la computadora; por eso NO se guarda info sensible (privada)
/* Dos tipos:
Local Storage:
Me guarda info hasta el fin de los tiempos (por defecto). Por siempre. De forma indefinida.
Ejemplo: Guardamos algo en un carrito, y nunca lo compramos. Para dejar ese producto en el carrito se utiliza localStorage

Session Storage:
Se almacena en el navegador hasta que se cierra la ventana. Existe dentro de mi pestaña solamente.
Ej: Datos de aplicaciones web.


//Crear valor en local storage
localStorage.setItem("saludar", "Hola, Local Storage")
                        KEY             VALOR
console.log(localStorage.getItem("saludar")); //Consultar informacion en local storage! .getItem

LOCAL STORAGE:
GET ITEM = CONSULTAR
SET ITEM = CREAR
*/
/*
const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")

let darkMode
if (localStorage.getItem("theme")) { //Consultar si existe dentro d el Local Storage. SI EXISTE ES VERDADERO, SINO ES FALSO.
    darkMode = localStorage.getItem("theme") //Consulta. SI ES VERDADERO LO CONSULTO.
} else {
    localStorage.setItem("theme", "light") // Si no existe lo CREO. SI ES FALSO LO CREO
}

if (darkMode === "dark") {
    document.body.classList.add("darkMode")
}

botonDarkMode.addEventListener("click", () => {
    // document.body.style.backgroundColor = "#000"
    // document.body.style.color = "#fff"
    document.body.classList.add("darkMode")
    localStorage.setItem("theme", "dark")

})

botonLightMode.addEventListener("click", () => {
    // document.body.style.backgroundColor = "#fff"
    // document.body.style.color = "#000"
    document.body.classList.remove("darkMode")
    localStorage.setItem("theme", "light")
    
})
*/
//JSON (JAVASCRIPT OBJECT NOTATION) 
// Se utiliza como intermediario para guardar datos en LOCAL STORAGE

class User {
    constructor (username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    loguearse() {
        console.log("Hola, estoy logueado");
    }
}

const user1 = new User("fran", "f@f.com", 123)
const user2 = new User("pepe", "p@p.com", 456)
const user3 = new User("juan", "j@j.com", 789)

const users = [user1, user2, user3]


localStorage.setItem("users", JSON.stringify(users)) //Se pasa a formato JSON para poder guardarlo en el LocalSto.
// Lo invierto ->
console.log(JSON.parse(localStorage.getItem("users"))) // Paso de JSON a objeto para consultar.
//              parseo de JSON a obj.  

// EN EL LOCAL STORAGE NO SE GUARDAN OBJETOS CON METODOS: SE PIERDEN EN EL JSON.
