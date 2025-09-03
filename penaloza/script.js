const pi=3.14
let contador = 0
var acumuador=0

const nombreInput=document.getElementById("nombreInput")
const btnSaludar =document.getElementById("btnSaludar")
const mensaje = document.getElementById("mensaje")

console.log("hola")
//ACCIONES:
btnSaludar.addEventListener("click",()=>{
    const nombre= nombreInput.value.trim()
    if (nombre){
        mensaje.textContent=`Hola, ${nombre},bienvenido a la clase!`
    }else{
        mensaje.textContent="Por favor ingrese un nombre!"
    }
})

//ej2
const btnIncrementar=document.getElementById("btnIncrementar")
const btnResetear=document.getElementById("btnResetear")
const spanContador=document.getElementById("contador")

btnIncrementar.addEventListener("click",()=>{
    contador++
    spanContador.textContent=contador
})

btnResetear.addEventListener("click",()=>{
    contador = 0
    spanContador.textContent=contador
})

//ej3
const tareaInput=document.getElementById("tareaInput")
const btnAgregar=document.getElementById("btnAgregar")
const listaTareas=document.getElementById("listaTareas")

btnAgregar.addEventListener("click",()=>{
    const tarea=tareaInput.value.trim()
    if(tarea){
        const li=document.createElement("li")
        li.classList.add("list-group-item")
        li.classList.add("fw-bold")
        li.textContent=tarea
        listaTareas.appendChild(li)
        tareaInput.value=""
    }
})