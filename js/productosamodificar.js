$(() => {
  setTimeout(() => {
    $('#modalWelcome').modal('show')
  }, 500)
}
);


// stock para ingresarlos por input

const productosFueraStock = [
  {
    id: 11,
    ean: 2638798643429,
    imagen: "../images/productosparastock/B365MA.jpg",
    categoria: "MOTHER",
    nombre: "MOTHER AURUS",
    precio: (21.70 * dollar).toFixed()
  },
  {
    id: 12,
    ean: 3209945431597,
    imagen: "../images/productosparastock/CCAST.jpg",
    categoria: "CONECTIVIDAD",
    nombre: "CHROMECAST PC HDMI",
    precio: (20 * dollar).toFixed()
  },
  {
    id: 13,
    ean: 1915173566801,
    imagen: `../images/productosparastock/GAH410M.jpg`,
    categoria: "MOTHER",
    nombre: "Mother Gigabyte H410",
    precio: (35 * dollar).toFixed()
  },
  {
    id: 14,
    ean: 7374288521415,
    imagen: `../images/productosparastock/GF210.jpg`,
    categoria: "VIDEO",
    nombre: "PLACA VIDEO GF210 1GB",
    precio: (105 * dollar).toFixed()
  },
  {
    id: 15,
    ean: 7854532154215,
    imagen: `../images/productosparastock/GMTB.jpg`,
    categoria: "MOUSE",
    nombre: "GENIUS BLANCO MINI CABLE RETRACTIL",
    precio: (11 * dollar).toFixed()
  },
  {
    id: 16,
    ean: 7932653966542,
    imagen: `../images/productosparastock/GPU115.jpg`,
    categoria: "PARLANTES",
    nombre: "PARLANTES USB CHICOS",
    precio: (9 * dollar).toFixed()
  },
  {
    id: 17,
    ean: 7500365241235,
    imagen: `../images/productosparastock/OFT75.jpg`,
    categoria: "RESMA",
    nombre: "RESMA 75Gr A4 500h.",
    precio: (3.1 * dollar).toFixed()
  },
  {
    id: 18,
    ean: 7171813245540,
    imagen: `../images/productosparastock/TR900S.jpg`,
    categoria: "MOUSE",
    nombre: "MOUSE INALAMBRICO CON PILAS",
    precio: (15 * dollar).toFixed()
  },
  {
    id: 19,
    ean: 2638736533429,
    imagen: "../images/productosparastock/routerCISCO.jpg",
    categoria: "ROUTER",
    nombre: "ROUTER CISCO GIGALAN",
    precio: (32.70 * dollar).toFixed()
  },
  {
    id: 20,
    ean: 7855598643429,
    imagen: "../images/productosparastock/NBLenovo.jpg",
    categoria: "NOTEBOOK",
    nombre: "NOTEBOOK LENOVO",
    precio: (71.70 * dollar).toFixed()
  },
]

// ==================================
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
</div> `

    listadoDeProductos.appendChild(div)
  })
}
muestraProductos(productos);

// === buscador ===

const buscador = document.getElementById('busqueda')

const buscar = (search) => {
  return productos.filter((prod) => prod.nombre.toLowerCase().includes(search))
}

buscador.addEventListener('input', () => {
  const search = buscador.value.trim().toLowerCase()
  muestraProductos(buscar(search))
})

$('#alteraProductos').append(`<form id="ingresaInput">
                    <input type="number" min=0 required placeholder="EAN 13 digitos">
                    <button class="btn-sm btn-success" type="submit">CARGAR PRODUCTO AL LISTADO</button>
                    </form>`
);

$('#ingresaInput').submit((e) => {
  e.preventDefault();
  let ingresos = e.target.children;
  let productoAgregar = productosFueraStock.find((prod) => prod.ean == ingresos[0].value);
  let productoExistente = productos.find((prod) => prod.ean == ingresos[0].value);

  if (productoExistente) {
    Swal.fire({
      position: 'top',
      icon: 'warning',
      title: `Producto existente!`,
      showConfirmButton: false,
      width: 200,
      timer: 1800,
    })
  }
  else if (productoAgregar) {
    productos.push({
      id: productoAgregar.id,
      nombre: productoAgregar.nombre,
      precio: productoAgregar.precio,
      categoria: productoAgregar.categoria,
      imagen: productoAgregar.imagen,
      ean: productoAgregar.ean
    })
    $('#exampleModal').modal('show');
  }
  else {
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: `El codigo ingresado no pertenece a un producto`,
      showConfirmButton: false,
      width: 200,
      timer: 1500,
    })
  }

  $('#contenidoProductos').empty();

  muestraProductos(productos);

  $('#ingresaInput')[0].reset();
});

$('#elModalDeBienvenida').append(` <div class="modal fade" id="modalWelcome" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">ATENCION</h5>
    </div>
    <div class="modal-body">
      En este sector podras añadir productos.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
</div>
`);

$("#elBoton1").click(() => {
  $("#contenidoProductos").hide(2000, function () {
    alert("LISTA OCULTA");
  })
});
$("#elBoton2").click(() => {
  $("#contenidoProductos").show(2000, function () {
    alert("LISTA VISIBLE");
  })
});

$('#elModalQueNoMeFunciona').append(` <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">PRODUCTO INGRESADO:</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      El producto aparecerá en la lista con los datos que ingresaste
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
</div>

`);