// Funciones Complejas o De Orden Superior
//Se definen funciones que serán utilizadas como parametros para OTRA funcion.
/* EJEMPLO1
const impuestoPais = (producto) => producto * 0.3
const impuestoRetenciones = (producto) => producto * 0.35
const impuestoIVA = (producto) => producto * 0.21
const impuestoX = (producto) => producto * 0.10

function calcularImpuestos(producto) {
    return producto + impuestoPais(producto) + impuestoRetenciones(producto) + impuestoIVA(producto) + impuestoX(producto)
}

let precioFinal = calcularImpuestos(100)
console.log(precioFinal); */

/*
class Persona {
    constructor (nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
    
}
//Envio una Funcion (prompt) como parametro.
const persona1 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un Apellido"), parseInt(prompt("Ingrese edad")), parseFloat(prompt("Ingrese un sueldo")))

console.log(persona1) */

class Persona {
    constructor (id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
    
}

const persona1 = new Persona(1, "Pepe", "Perez", 30, 10000)
const persona2 = new Persona(2, "Maria", "Martinez", 22, 15000)
const persona3 = new Persona(3, "Pedro", "Parker", 28, 12000)
const persona4 = new Persona(4, "Fernanda", "Fernandez", 32, 18000)
const persona5 = new Persona(5, "Carlos", "Carles", 34, 19000)

const personas = [persona1, persona2, persona3, persona4, persona5]

/* //Muestra cada uno de los objetos. Es el ciclo FOR, con Arrays. Se utiliza funcion flecha.
personas.forEach(persona => { // Funciona para cada objeto del Array. 
    persona.sueldo *= 1.3
    console.log(persona) //"persona" = cualquier nombre. Solo es un parametro
})

Lo mismo que:const personaArray = (persona) => console.log(persona) */

/*
let nombreBusqueda = prompt("Ingrese Nombre:")
let apellidoBusqueda = prompt("Ingrese apellido:")
console.log(personas.find(persona => persona.nombre == nombreBusqueda &&persona.apellido == apellidoBusqueda)) 
//.find() --> Devuelve el PRIMER OBJETO que cumple la condicion. Encuentra el primer objeto y deja de buscar. 

//.filter --> Muestra TODOS los elementos que CUMPLAN la condicion, guardados en un ARRAY
//.filter --> Devuelve un ARRAY. Si ningun elemento cumple la cond. devuelve un ARRAY VACIO
const personasFiltradas = personas.filter(persona => persona.sueldo > 12000)
//Mostramos todos los objetos con un forEach
personasFiltradas.forEach(persona => {
    console.log(persona)
})

Realiza una consulta. Devuelve TRUE o FALSE
let consulta = personas.some(persona => persona.sueldo > 15000)

Filtramos SI Consulta = true
if (consulta) {
    console.log(personas.filter(personas => personas.sueldo > 15000))
} else {
    console.log("No existe personas con sueldo < 15000");
}
--

let acumulador = 0 //Voy sumando todos los sueldos de las personas
const sueldos = personas.map(persona => persona.sueldo) //Muestro solo un objeto del Array. Solamente los sueldos. No modifica el Array original.
const nombres = personas.map(persona => persona = {nombre: persona.nombre, apellido: persona.apellido})
sueldos.forEach(sueldo => {
    acumulador += sueldo
})
console.log(acumulador);


//IGUAL QUE UN ACUMULADOR. VOY SUMANDO LOS RESULTADOS QUE ME VA DANDO
console.log(sueldos);
console.log(sueldos.reduce((prev, act) => prev + act, 0)); 



const carac = ["h", "o", "l", "a"]
console.log(carac.reduce((prev, act) => prev + act, "")); */

const sueldos = personas.map (persona => persona.sueldo)

console.log(sueldos);
console.log(sueldos.sort((a,b) => a-b)); // Ordenar arrays de MENOR A MAYOR
console.log(sueldos.sort((a,b) => b-a)); // Ordenar Array de MAYOR A MENOR

