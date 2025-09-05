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
        console.warn("!!!: el usuario no ingreso un nombre.")
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
        console.warn("!!!: el contador ya esta en cero.")
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
        console.warn("!!!: no se escribio una tarea.")
    }
})

//Clase 2: Consumo de JSON con fetch.
const btn_cargar = document.getElementById("btn_cargar")
const btn_filtrar = document.getElementById("btn_filtrar")
const producto_container = document.getElementById("productos_container")

let productos = []

// Vammos a crear una función capar de renderizar los productos en la página web:
function renderizar_productos(lista){
    producto_container.innerHTML=""
    lista.forEach(producto => {
        const col = document.createElement("div")
        col.classList.add("col-md-4","col-lg-3")

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text mb-1"><strong>Categoria:</strong> ${producto.categoria}</p>
                    <p class="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                </div>
            </div>
        `
        producto_container.appendChild(col)
    });
}

async function cargar_productos(){
    try{
        const respuesta = await fetch("assets/json/bd.json")
        productos = await respuesta.json()
        renderizar_productos(productos)
        console.log("La lista de productos se cargo exitosamente.")
    }catch (error){
        console.error("Error al cargar producto:",error)
    }
}

btn_cargar.addEventListener("click", () => cargar_productos())

btn_filtrar.addEventListener("click", ()=>{
    if(productos.length === 0){
        console.warn("Hay que cargar los productos primero.")
        alert("Primero debes cargar los productos")
        return
    }

    const filtrados = productos.filter(producto => producto.categoria === "Electrónica")
    renderizar_productos(filtrados)
    console.log("Los productos se filtraron correctamente.")
})

window.onload(cargar_productos())