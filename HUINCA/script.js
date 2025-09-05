//Clase 2 : Consumo de JSON con Fetch

const btnCargar = document.getElementById("btnCargar")
const btnFiltrar = document.getElementById("btnFiltrar")
const productosContainer = document.getElementById("productosContainer")

let productos = []

//Se creara una funcion capaz de renderizar los productos en la pagina web:
function renderizarProductos(lista){
    productosContainer.innerHTML = "" //esto borra todo lo que esta dentro de la class productosContainer 

    lista.forEach(producto => { //esto recorre todos los productos de la lista( que seria la lista del JSON)
        const col = document.createElement("div") //col de columna

        col.classList.add("col-md-4", "col-lg-3")

        //el innerHTML sirve para leer o modificar el contenido del html interno
        col.innerHTML= `
        <div class="card h-100 shadow-sm">
            <img src= "${producto.imagen}" class= "card-img-top" alt= "${producto.nombre}">
            <div class= "card-body">
                <h5 class= "card-title">${producto.nombre}</h5>
                <p class= "card-text" mb-1><strong>Categoria:</strong>${producto.categoria}</p> 
                <p class= "card-text" ><strong>Precio:</strong>${producto.precio}</p> 
            </div>
        </div>
        `
        productosContainer.appendChild(col)
    });
}

btnCargar.addEventListener("click", async ()=> {
    try {
        const respuesta = await fetch("db.json") //el comando fetch hace peticiones a archivos o las Api
        prodcutos = await respuesta.json()
        renderizarProductos(productos)
    } catch (error) { 
        console.error("Error al cargar producto: ",error)
    }
})