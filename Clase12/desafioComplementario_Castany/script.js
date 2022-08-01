class Alumno {
    constructor (nombre, nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, nota5 = 0, promedio = 0, condicion = ""){
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
        this.nota5 = nota5
        this.promedio = promedio
        this.condicion = condicion
    }
}

function calcPromedio(...numeros) { //OPERADOR SPREAD
    return numeros.reduce((acc, n) => acc + n, 0) /5
}

let alumnos = JSON.parse(localStorage.getItem("alumnos")) ?? [] //OPERADOR NULLISH

const alumnoForm = document.getElementById("alumnoForm")
const tablaAlumnos = document.getElementById("tablaAlumnos")
const borrarLista = document.getElementById("borrarLista")

tablaAlumnos.innerHTML = ""
alumnos.forEach(alumno => {
    tablaAlumnos.innerHTML += //ACCESO CONDICIONAL A OBJETOS ( ?. )
    `
        <tr class="table-default">
            <th scope="row">${alumno?.nombre}</th>
            <td>${alumno?.nota1}</td>
            <td>${alumno?.nota2}</td>
            <td>${alumno?.nota3}</td>
            <td>${alumno?.nota4}</td>
            <td>${alumno?.nota5}</td>
            <td>${alumno?.promedio}</td>
            <td>${alumno?.condicion}</td>
        </tr>
    `
});

alumnoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nombreAlumno = document.getElementById("nombreAlumno").value
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)
    let nota5 = parseFloat(document.getElementById("nota5").value)

    let promedio = calcPromedio(nota1, nota2, nota3, nota4, nota5) //

    let condicion = (promedio >= 6) ? "Aprobado" : "Desaprobado" // OPERADOR TERNARIO

    const alumno = new Alumno(nombreAlumno, nota1, nota2, nota3, nota4, nota5, promedio, condicion)
    alumnos.push(alumno)

    localStorage.setItem("alumnos", JSON.stringify(alumnos))

    alumnoForm.reset()

    tablaAlumnos.innerHTML = ""
    alumnos.forEach(alumno => {
        tablaAlumnos.innerHTML += //ACCESO CONDICIONAL A OBJETOS ( ?. )
        `
        <tr class="table-default">
            <th scope="row">${alumno?.nombre}</th> 
            <td>${alumno?.nota1}</td>
            <td>${alumno?.nota2}</td>
            <td>${alumno?.nota3}</td>
            <td>${alumno?.nota4}</td>
            <td>${alumno?.nota5}</td>
            <td>${alumno?.promedio}</td>
            <td>${alumno?.condicion}</td>
        </tr>
        `
    });

    console.log(alumnos)
    console.log(...alumnos)
})

borrarLista.addEventListener("click", () => {
    alumnos = []
    localStorage.removeItem("alumnos", JSON.stringify(alumnos))

    tablaAlumnos.innerHTML = ""
    console.log("Lista de alumnos borrada.")

}) 






