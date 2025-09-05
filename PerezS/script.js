// comentarios para javascript:
//const pi = 3.14
//let contador = 0
//var acumulador = 0

//const nombreInput = document.getElementById("nombreInput")
//const btnSaludar = document.getElementById("btnSaludar")
//const mensaje = document.getElementById("mensaje")

// altGr + llave derecha = ``
//acciones:
//btnSaludar.addEventListener("click", ()=>{
  //  const nombre = nombreInput.value.trim()
  //  if(nombre){
  //      mensaje.textContent = `hola, ${nombre}, Bienvenido a la tripulación `
  //  }else{
   //     mensaje.textContent = "por favor, ingrese un nombre!"
  //  }
//})


//ejemplo2 contador
//const btnIncrementar = document .getElementById("btnIncrementar")
//const btnResetear = document.getElementById("btnSaludar")
//const spanContador = document.getElementById("contador")

// btnIncrementar.addEventListener("click", ()=>{
 //   contador++
  //  spanContador.textContent = contador
//})


//ejemplo3 lista de tareas dinamicas
//const tareaInput = document.getElementById("tareaInput")
//const btnAgregar = document.getElementById("btnAgregar")
//const listaTareas = document.getElementById("listaTareas")





//btnAgregar.addEventListener("click", ()=>{
 //   const tarea = tareaUnput.value.trim()
  //  if(tarea){
   //     const li = document.createElement("li")
    //    li.classList.add("list-group-item")
    //li.textContent = tarea
    //    listaTareas.appendChild(li)
      //  tareaInput.value = ""
    //}
//})


const btnCargar = document.getElementById("btnCargar")
const btnFiltrar = document.getElementById("btnFiltrar")
const productosContainer = document.getElementById("productosContainer")

let productos = []

// Función para mostrar productos
function renderrizarProductos(lista) {
    productosContainer.innerHTML = ""
    lista.forEach(p => {
        const col = document.createElement("div")
        col.classList.add("col-md-4", "col-lg-3")

        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
            <div class="card-body">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text mb-1"><strong>Categoria:</strong> ${p.categoria}</p>
              <p class="card-text"><strong>Precio:</strong> ${p.precio}</p>
            </div>
          </div>
        `
        productosContainer.appendChild(col)
    })
}

// Evento para cargar productos
btnCargar.addEventListener("click", async () => {
    try {
        const respuesta = await fetch("db.json")
        productos = await respuesta.json()
        renderrizarProductos(productos)
    } catch (error) {
        console.error("ERROR al cargar productos:", error)
    }
})

// Evento para filtrar productos por categoría "Electronica"
btnFiltrar.addEventListener("click", () => {
    if (productos.length === 0) {
        alert("Primero debes cargar los productos.")
        return
    }
    const filtrados = productos.filter(p => p.categoria.toLowerCase() === "electronica")
    renderrizarProductos(filtrados)
})







