// Comentarios para JavaScript:
const pi = 3.14 //(const sirve para determinar datods que no se pueden cambiar durante la ejecución)
let contador = 0 // (let sirve para determinar variables que pueden ir cambiando durante la ejecución)
var  acumulador = 0 // (similar al let, pero con otras limitaciones)

// Asi podemos interactuar con el DOM:
const input_mensaje = document.getElementById("ipn_mensaje_dinamico")
const btn_saludar = document.getElementById("btn_saludar")
const mensaje = document.getElementById("txt_mensaje")

// Acciones:
// Ejemplo 1: Botón saludar
btn_saludar.addEventListener("click",()=>{
    const nombre = input_mensaje.value.trim()
    if(nombre){
        mensaje.textContent = `Hola, ${nombre}, Bienvenido a la clase!`
        console.log("Funciono mensaje de bienvenida.")
    }else{
        mensaje.textContent = "Por favor, ingrese un nombre."
        console.error("Error: el usuario no ingreso un nombre.")
    }
})

// Ejemplo 2: Contador.
const btn_incrementar = document.getElementById("btn_incrementar")
const btn_resetear = document.getElementById("btn_resetear")
const span_contador = document.getElementById("txt_contador")

btn_incrementar.addEventListener("click",()=>{
    contador++
    span_contador.textContent = contador
    console.log("Contador se incremento.")
})

btn_resetear.addEventListener("click",()=>{
    if(contador != 0){
        contador = 0
        span_contador.textContent = contador
        console.log("Contador se reseteo.")
    }else{
        console.error("Error: el contador ya esta en cero.")
    }
})

// Ejemplo 3: Lista de tareas dinamicas.
const inp_tarea = document.getElementById("inp_tarea")
const btn_agregar = document.getElementById("btn_agregar")
const ul_lista_tarea = document.getElementById("ul_lista_tareas")

btn_agregar.addEventListener("click",()=>{
    const tarea = inp_tarea.value.trim()
    if(tarea){
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        li.classList.add("fw-bold")
        li.textContent = tarea
        ul_lista_tarea.appendChild(li)
        inp_tarea.value = ""
        console.log("Se agrego tarea a la lista.")
    }else{
        console.error("Error: no se escribio una tarea.")
    }
})