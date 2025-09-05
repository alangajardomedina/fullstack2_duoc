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

//Clase 2
const btnCargar         = document.getElementById("btnCargar")
const btnFiltrar        = document.getElementById("btnFiltrar")
const productoContainer = document.getElementById("productoContainer")

let productos = []

function renderizarProductos(lista) {
    productoContainer.innerHTML = ""
    lista.forEach(producto => {
        const col = document.createElement("div")
        col.classList.add("col-md-4","col-lg-3")

        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img class="card-img-top" scr="${producto.imagen}" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text mb-1"><strong>Categoria:</strong> ${producto.categoria}</p>
                    <p class="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                </div>
            </div>
        `
        productoContainer.appendChild(col)
    });
}

btnCargar.addEventListener("click", async ()=>{
    try {
        const respuesta = await fetch("data_base.json")
        productos = await respuesta.json()
        renderizarProductos(productos)
    } catch (error) {
        console.error("ERROR: no se pudo cargar los productos: ", error)
    }
});
/*LOS TRES = EVALUAN QUE EL VALOR SEA EL QUE SE ESPECIFICA Y QUE COINCIDA CON EL TIPO, POR EJEMPLO
ESTE DE ACA ABAJO VERIFICA QUE EL LARGO SEA 0 Y QUE SEA DE TIPO INT*/
btnFiltrar.addEventListener("click", ()=>{
    if(productos.length === 0){
        alert("primero debes cargar los productos.")
        return
    }
    const filtrados = productos.filter(producto => producto.categoria === "Torta")
  renderizarProductos(filtrados)
});