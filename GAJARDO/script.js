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

// Clase 2: Consumo de JSON con Fetch:
const btnCargar = document.getElementById("btnCargar")
const btnFiltrar = document.getElementById("btnFiltrar")
const productosContainer = document.getElementById("productosContainer")

let productos = []

//Vamos a crear una función capas de renderizar los productos en la página web:
function renderizarProductos(lista){
  productosContainer.innerHTML = ""
  lista.forEach(p => {
    const col = document.createElement("div")
    col.classList.add("col-md-4","col-lg-3")
    
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text mb-1"><strong>Caterogia:</strong> ${p.categoria}</p>
          <p class="card-text"><strong>Precio:</strong> ${p.precio}</p>
        </div>
      </div>
    `
    productosContainer.appendChild(col)
  });
}

btnCargar.addEventListener("click", async ()=> {
  try {
    const respuesta = await fetch("db.json")
    productos = await respuesta.json()
    renderizarProductos(productos)
  } catch (error) {
    console.error("Error al cargar producto:",error)
  }
})

btnFiltrar.addEventListener("click",()=>{
  if(productos.length === 0){
    alert("Primero debes cargar los productos.")
    return
  }
  const filtrados = productos.filter(p => p.categoria === "Electrónica")
  renderizarProductos(filtrados)
})
