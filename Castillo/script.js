//Clase 2: Consumo de JSON con Fetch:

const btnCargar = document.getElementById("btnCargar")
const btnFiltrar = document.getElementById("btnFiltrar")
const productosContainer = document.getElementById("productosContainer")

let productos = []

//Vamos a crear una función capas de renderizar los productos en la página web:
function renderizarProductos(lista){
    productosContainer.innerHTML="" //Se borran los datos que está dentro del container
    lista.forEach(p => {
        const col = document.createElement("div")
        col.classList.add("col-md-4","col-lg-3")//Se agregan clases - col significa las columnas que usa de un total de 12
        col.innerHTML = `
            <div class=card h-100 shadow-sm>
                <img src="${p.imagen}" class="card-img-top alt=${p.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text mb-1"><strong>Categoría:</strong> ${p.categoria}</p>
                    <p class="card-text"><strong>Precio:</strong> ${p.precio}</p>
                </div>
            </div>
        `
        productosContainer.appendChild(col) //Se agrega a la lista
    });
}

btnCargar.addEventListener("click", async ()=>{ //el async es para poder usar los await
    try {
        const respuesta = await fetch("db.json") //await es para que espere que fetch tenga todos los datos
        productos = await respuesta.json()
        renderizarProductos(productos)
    } catch (error) {
        console.error("Error al cargar producto:",error)//el .error es para que se vea en rojo
    }
})

btnFiltrar.addEventListener("click", ()=>{
    if(productos.length === 0){
        alert("Primero debes cargar los productos.")
        return
    }

    const filtrados = productos.filter(p => p.categoria === "Electrónica")
    renderizarProductos(filtrados)
})