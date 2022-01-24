const iva = 1.21;
const interes3 = 1.7;
const interes6 = 2.3;
const interes12 = 3.1;

let botonEfectivo = document.getElementById("botonEfectivo");
let boton3pagos = document.getElementById("boton3pagos");
let boton6pagos = document.getElementById("boton6pagos");
let boton12pagos = document.getElementById("boton12pagos");

const productosRecibidos = localStorage.getItem('productos');
const productosaCarrito = JSON.parse(productosRecibidos);

const sumarProducto = (itemId) => {
    const producto = productosaCarrito.find((prod) => prod.id === itemId);
    producto.cantidad++
    mostrarListadoConProductos()
    efectivo();
}

avisoVacio = () => {
    if (productosaCarrito === null) {
        Swal.fire({
            position: 'top',
            icon: 'warning',
            title: `No hay productos en carrito !`,
            showConfirmButton: false,
            width: 300,
            timer: 2500,
        })
    }
    else {
        mostrarListadoConProductos();
    }
}

const eliminarProducto = (itemId) => {
    const producto = productosaCarrito.find((prod) => prod.id === itemId)

    producto.cantidad--

    if (producto.cantidad === 0) {
        const index = productosaCarrito.indexOf(producto)
        productosaCarrito.splice(index, 1)

    }
    localStorage.clear();
    // SI ELIMINAMOS TODOS LOS PRODUCTOS DEL LISTADO CARRITO, MUESTRA MODAL CONFIRMANDO CARRITO VACIO. 
    if (productosaCarrito.length === 0) {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: `Carrito Vacio!`,
            showConfirmButton: false,
            width: 200,
            timer: 1800,
        })
    }
    mostrarListadoConProductos()
    efectivo();

}

let mostrarListadoConProductos = () => {

    listaenHTML.innerHTML = ""

    productosaCarrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('listaenHTML')

        div.innerHTML = `
                <img class="expandImg" src =${prod.imagen}>
                <p>${prod.nombre}</p>
                <hr>
                <p>Precio: $${prod.precio}</p>
                <hr>
                <p>Cantidad: ${prod.cantidad}</p>
                <hr>
                <div class="botonesSR">
                <button onclick="eliminarProducto(${prod.id})"
                class="boton-eliminarItem"></button>
                <button onclick="sumarProducto(${prod.id})"
                 class="boton-sumarItem"></button>
                 </div>
                 <hr>
                 `

        listaenHTML.appendChild(div)
    })

    precioFinal = productosaCarrito.reduce((acc, prod) => acc += prod.precio * prod.cantidad, 0);
}

botonEfectivo.onclick = () => { efectivo() };
boton3pagos.onclick = () => { calcularMostrarPrecioFinal(interes3) };
boton6pagos.onclick = () => { calcularMostrarPrecioFinal(interes6) };
boton12pagos.onclick = () => { calcularMostrarPrecioFinal(interes12) };

const efectivo = () => {
    precioProductoF = (parseFloat(precioFinal * iva).toFixed(2));
    mostrarPrecioFinal();
}

const calcularMostrarPrecioFinal = (interes) => {
    precioProductoF = (((parseFloat(precioFinal) * iva)) * interes).toFixed(2);
    mostrarPrecioFinal();
}

const mostrarPrecioFinal = () => {
    document.getElementById('precioFinal').innerHTML = `$ ${precioProductoF}`;
}

avisoVacio();
efectivo();

// ========= API MERCADO PAGO =============

const finalizarCompra = async () => {

    const itemsToMP = productosaCarrito.map((prod) => {
        return {
            title: prod.nombre,
            description: "",
            picture_url: prod.imagen,
            category_id: "",
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: parseFloat(prod.precio) * iva
        }
    })

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
            Authorization: "Bearer TEST-2881734393029190-102119-0be5bce21ced0437ece41d29c5d99bf0-31032230"
        },
        body: JSON.stringify({
            items: itemsToMP,
            back_urls: {
                success: window.location.href,
                failure: window.location.href
            }

        })
    })
    const data = await response.json()

    window.location.replace(data.init_point)

}