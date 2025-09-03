const pi = 3.14
let contador = 0
var acumulador = 0

const nombreImput = document.getElementById("nombreImput")
const btnSaludar =  document.getElementById("btnSaludar")
const mensaje = document.getElementById("mensaje")


// EJEMPLO 1: Saludo personalizado
btnSaludar.addEventListener("click", () => {
    const nombre = nombreImput.value.trim()
    if(nombre){
        mensaje.innerText = `Hola, ${nombre}, Bienvenido a la clase!`
    } else {
        mensaje.innerText = "Por favor ingresa tu nombre"
    }
})

// EJEMPLO 2: contador
const btnIncrementar = document.getElementById("btnIncrementar")
const btnResetear = document.getElementById("btnResetear")
const spanContador = document.getElementById("Contador")

btnIncrementar.addEventListener("click", () => {
    contador++
    spanContador.textContent = contador
})

btnResetear.addEventListener("click", () => {
    contador = 0
    spanContador.textContent = contador
})

// EJEMPLO 3: lista de tareas dinamica
const tareaImput = document.getElementById("tareaImput")
const btnAgregarTarea = document.getElementById("btnAgregarTarea")
const listaTareas = document.getElementById("listaTareas")

// Función para capitalizar la primera letra
function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}

btnAgregarTarea.addEventListener("click", () => {
    const tarea = tareaImput.value.trim()
    if (tarea) {
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.classList.add("fw-bold")
        li.textContent = capitalizarPrimeraLetra(tarea) // Capitalizar la primera letra
        listaTareas.appendChild(li)
        tareaImput.value = ""
    } else {
        alert("Por favor ingresa una tarea")
    }
})

