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