
localStorage.clear();
let productos = [];
const dollar = 195;

fetch('../js/inventario.json')
    .then( (res) => res.json() )
    .then( (data) => {
      productos = data;

      // CAMBIO EL VALOR DEL PRECIO A PESOS LO CUAL ESTA EXPRESADO EN DOLARES EN EL JSON
      data.forEach(function(item){
        item.precio = (item.precio*dollar).toFixed()
      })
      
      muestraProductos(productos);
    })

const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');

const precioTotal = document.getElementById('precioTotal');
const carrito = [];

const listadoDeProductos = document.getElementById('contenidoProductos')

const muestraProductos = (listado) => {
  listadoDeProductos.innerHTML = '';

  listado.forEach((productos) => {
    
    const div = document.createElement('div')
    div.className = "productosLista"
    div.classList.add('productos')
    div.innerHTML = `
                  <img src=${productos.imagen} class="card-img-top">
                  <div class="card-body">
                  <p class="tituloCategoria">CATEGORIA: ${productos.categoria}</p>
                  <h6 class="tituloNombre">${productos.nombre}</h6>
                  <p class="tituloPrecio">Precio: $${productos.precio} + IVA</p>
                  <button onclick="agregarAlCarrito(${productos.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
</div> `

    listadoDeProductos.appendChild(div)
  })
  
}

const agregarAlCarrito = (itemId) => {

  const productoEnCarrito = carrito.find((prod) => prod.id === itemId)
  
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++
  } else {
    
    const producto = productos.find( (prod) => prod.id === itemId)
    
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      imagen: producto.imagen,
      cantidad: 1
    })
  }


  // MODAL A GUSTO PARA INFORMAR CON IMAGEN QUE EL PRODUCTO FUE AGREGADO 
  var src = $(productos[itemId-1]).find('imagen').attr('src');
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Producto ingresado al carrito`,
    showConfirmButton: false,
    width: 200,
    timer: 1200,
    imageUrl: productos[itemId-1].imagen,
  })
  
  actualizarCarrito()
}

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = ""

  carrito.forEach((prod) => {
      const div = document.createElement('div')
      div.classList.add('productoEnCarrito')

      div.innerHTML = `
              <p>${prod.nombre}</p>
              <hr>
              <p>Precio: $${prod.precio}</p>
              <hr>
              <p>Cantidad: ${prod.cantidad}</p>
              <hr>
              <button onclick="eliminarProducto(${prod.id})"
               class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
               <hr>
               `
              
              contenedorCarrito.appendChild(div)
            })

  contadorCarrito.innerText = carrito.reduce((acc, prod) => acc += prod.cantidad, 0);
  precioTotal.innerText = (carrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0));
  
  localStorage.setItem('productos', JSON.stringify(carrito));
  
}

const eliminarProducto = (itemId) => {
  const producto = carrito.find((prod) => prod.id === itemId)
  
  producto.cantidad--

  if (producto.cantidad === 0) {
      const index = carrito.indexOf(producto)
      carrito.splice(index, 1)
    }
    localStorage.clear();
 
  actualizarCarrito()
}

const buscador = document.getElementById('busqueda')

const buscar = (search) => {
    return productos.filter((prod) => prod.nombre.toLowerCase().includes(search))
}


buscador.addEventListener('input', () => {
    const search = buscador.value.trim().toLowerCase()
    muestraProductos( buscar(search) )  
})