// === Clase 1: Introducción a JavaScript ===

// Variables globales
let contador = 0;

// === Mensaje dinámico ===
const nombreInput = document.getElementById("nombreInput");
const btnSaludar = document.getElementById("btnSaludar");
const mensaje = document.getElementById("mensaje");

btnSaludar.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  if (nombre) {
    mensaje.textContent = `¡Hola, ${nombre}! Bienvenido a la clase de JavaScript 🚀`;
  } else {
    mensaje.textContent = "Por favor, escribe tu nombre.";
  }
});

// === Contador ===
const btnIncrementar = document.getElementById("btnIncrementar");
const btnResetear = document.getElementById("btnResetear");
const spanContador = document.getElementById("contador");

btnIncrementar.addEventListener("click", () => {
  contador++;
  spanContador.textContent = contador;
});

btnResetear.addEventListener("click", () => {
  contador = 0;
  spanContador.textContent = contador;
});

// === Mini To-Do List ===
const tareaInput = document.getElementById("tareaInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaTareas = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
  const tarea = tareaInput.value.trim();
  if (tarea) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = tarea;
    listaTareas.appendChild(li);
    tareaInput.value = "";
  }
});



//Clase 2- copiar la clase 1 desde la rama "GAJARDO"
const btnCargar = document.getElementById("btnCargar")
const btnFiltrar = document.getElementById("btnFiltrar")
const productosContainer = document.getElementById("productosContainer")

let productos=[]

function renderizarProductos(lista){
    productosContainer.innerHTML = ""
    lista.forEach(p => {
        const col= document.createElement("div")
        col.classList.add("col-md-4","colcol-lg-3")

        col.innerHTML=`
        <div class="card h-100 shadow-sm">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body">
                <h5 class="card-tittle">${p.nombre}</h5>
                <p class="card-text mb-1"><strong>Precio:</strong> ${p.categoria} </p>
                <p class="card-text"><strong>Categoria:</strong> ${p.precio} </p>
            </div>
        </div>
    `
    productosContainer.appendChild(col)
    });
}

btnCargar.addEventListener("click" ,async()=>{
    try{
        const respuesta= await fetch("db.json")
        productos=await respuesta.json()
        renderizarProductos(productos)
    }catch (error){
        console.error("ERROR, EL PRODUCTO CARGOL MAL",error)
    }
})

btnFiltrar.addEventListener("click", ()=>{
    if(productos.length===0){
        alert("CARGUE LOS PRODICTOS PRIMERO, no sea w*** :3")
        return
    }
    const filtrados = productos.filter(p => p.categoria ==="Electrónica")
    renderizarProductos(filtrados)
})

