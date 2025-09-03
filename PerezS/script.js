// comentarios para javascript:
const pi = 3.14
let contador = 0
var acumulador = 0

const nombreInput = document.getElementById("nombreInput")
const btnSaludar = document.getElementById("btnSaludar")
const mensaje = document.getElementById("mensaje")

// altGr + llave derecha = ``
//acciones:
btnSaludar.addEventListener("click", ()=>{
    const nombre = nombreInput.value.trim()
    if(nombre){
        mensaje.textContent = `hola, ${nombre}, Bienvenido a la tripulación `
    }else{
        mensaje.textContent = "por favor, ingrese un nombre!"
    }
})


//ejemplo2 contador
const btnIncrementar = document .getElementById("btnIncrementar")
const btnResetear = document.getElementById("btnSaludar")
const spanContador = document.getElementById("contador")

btnIncrementar.addEventListener("click", ()=>{
    contador++
    spanContador.textContent = contador
})


//ejemplo3 lista de tareas dinamicas
const tareaInput = document.getElementById("tareaInput")
const btnAgregar = document.getElementById("btnAgregar")
const listaTareas = document.getElementById("listaTareas")





btnAgregar.addEventListener("click", ()=>{
    const tarea = tareaUnput.value.trim()
    if(tarea){
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.textContent = tarea
        listaTareas.appendChild(li)
        tareaInput.value = ""
    }
})









