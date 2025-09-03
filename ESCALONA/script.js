const pi = 3.14
let contador = 0
var acumulador = 0


const nombreImput   = document.getElementById("nombreImput")
const btnSaludar    = document.getElementById("btnSaludar")
const mensaje       = document.getElementById("mensaje")

//ejemplo 1 de acciones
btnSaludar.addEventListener("click", ()=>{
    const nombre = nombreImput.value.trim()
    if(nombre) {
        mensaje.textContent = `Hola ${nombre}, que tal el dia?`
    }else{
        mensaje.textContent = `Ingrese un nombre porfavor`
    }
})

//ejemplo 2 de acciones
const btnIncrementar    = document.getElementById("btnIncrementar")
const btnResetear       = document.getElementById("btnResetear")
const spanContador      = document.getElementById("contador")

btnIncrementar.addEventListener("click", ()=>{
    contador ++
    spanContador.textContent = contador
})

btnResetear.addEventListener("click", ()=>{
    contador = 0
    spanContador.textContent = contador
})

const tareaInput    = document.getElementById("tareaInput")
const btnAgregar    = document.getElementById("btnAgregar")
const listaTareas   = document.getElementById("listaTareas")

btnAgregar.addEventListener("click", ()=>{
    const tarea = tareaInput.value.trim()
    if(tarea){
        const li = document.createElement("li")
        li.textContent= tarea
        li.classList.add("list-group-item")
        li.classList.add("fw-bold")
        listaTareas.appendChild(li)
        tareaInput.value = ""
    }
})