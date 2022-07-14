// EVENTOS
// Lo que sucede cuando el usuario hace click en un objeto, o ingresa un texto.
/*
const boton1 = document.getElementById('boton1')

boton1.addEventListener("click", () => {
    console.log("Di click en boton");
})
boton1.addEventListener("click", () => { // Se puede hacer INFINITAS veces
    console.log("Di click en boton addEvent2");
})

boton1.onclick = () => { // Es una PROPIEDAD. Se asigna a un valor. Es en CASCADA. Como cambiar el valor de una cascada.
    console.log("Di click en el boton .ONCLICK");
}
boton1.onclick = () => { // Se superpone con el de arriba. Se puede crear uno solo.
    console.log("Superpuse el boton .onclick");
}



const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

input1.addEventListener("input", () => { // Se ejecuta cada vez que agrego o saco texto al INPUT. Ej: buscador de google.
    console.log(input1.value) // .value = el valor del input
})
input1.addEventListener("change", () => { // Presionar la tecla ENTER
    console.log(input1.value)
})
input2.addEventListener("click", () => { 
    console.log(input1.value);
})



const inputColor = document.getElementById("inputColor")

inputColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputColor.value // Cambia el valor de la propiedad bgColor del body.
    console.log(inputColor.value);
}) 

*/
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}
const cuentas = []

const form = document.getElementById("idForm") // NO SE CONSULTA POR EL BOTON. SE CONSULTA POR EL ID DEL FORM.
const divUsers = document.getElementById("divUsers")
const botonUsers = document.getElementById("botonUsers")

form.addEventListener("submit", (event) => { // El evento es SUBMIT
    event.preventDefault() // Prevengo que se reinicie la Pagina. Saco el comportamiento por defecto.

    let username = document.getElementById("idUser").value
    let email = document.getElementById("idEmail").value
    let password = document.getElementById("idPassword").value

    const user = new User (username, email, password)
    cuentas.push(user)
    console.log(cuentas)

    form.reset()
})

botonUsers.addEventListener("click", () => {
    cuentas.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.email}</p>
            </div>
        </div>
        `
    })
})

