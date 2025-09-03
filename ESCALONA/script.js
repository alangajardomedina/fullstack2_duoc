const pi = 3.14
let contador = 0
var acumulador = 0


const nombreImput = document.getElementById("nombreInput")
const btnSaludar = document.getElementById("btnSaludar")
const mensaje = document.getElementById("mensaje")

btnSaludar.addEventListener("click", ()=>{
    const nombre = nombreInput.value.trim()
    if(nombre) {
        mensaje.textContent = `Hola ${nombre}, que tal el dia?`
    }else{
        mensaje.textContent = `Ingrese un nombre porfavor`
    }
})