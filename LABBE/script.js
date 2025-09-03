// Comentarios para JavaScript
const pi = 3.14
let contador = 0
var acumulador = 0
// Así podemos interactuar con el Dom
const nombreInput = document.getElementById("nombreInput")

const btnSaludar = document.getElementById("btnSaludar")

const mensaje = document.getElementById("mensaje")
// Acciones
// Ejemplo 1
btnSaludar.addEventListener("click", ()=>{
    const nombre = nombreInput.value.trim()
    if(nombre){
        mensaje.textContent = `Hola, ${nombre}, Bienvenido a la clase!`
    } else{
        mensaje.textContent = "Por favor ingresa tu nombre!"
    }
})
// Ejemplo 2
const btnIncrementar = document.getElementById("btnIncrementar")
const btnResetear = document.getElementById("btnResetear")
const spanContador = document.getElementById("contador")

btnIncrementar.addEventListener("click", ()=>{
    contador++
    spanContador.textContent = contador
})

btnResetear.addEventListener("click", ()=>{
    contador = 0
    spanContador.textContent = contador
})

// Ejemplo 3

const tareaInput = document.getElementById("tareaInput")
const btnAgregarTarea = document.getElementById("btnAgregarTarea")
const listaTareas = document.getElementById("listaTareas")

btnAgregarTarea.addEventListener("click", ()=>{
    const tarea = tareaInput.value.trim()
    if(tarea){
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.textContent = tarea
        listaTareas.appendChild(li)
        tareaInput.value = ""
    }
})