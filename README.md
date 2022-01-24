Utilizar estos codigos para ingresar en seccion productosamodificar.html.

2638798643429

3209945431597

1915173566801

7374288521415

7854532154215

7932653966542

7500365241235

7171813245540

2638736533429

7855598643429

PRODUCTOS QUE EXISTEN EN OTRO ARRAY...
7445216986224 Ya existente (o cualquiera del array productos)

## Detalle del proyecto
***
Seccion INDEX.HTML.
> La misma compone de un modal de bienvenida con logo insertado.
Contiene un carousel con varias imagenes, y un NAV que invita a ingresar a varias secciones, lo cual puede interactuar utilizando Api, busquedas, ingresos a stock, etc.
> El proyecto fue armado de esta manera para mostrar distintas interacciones que se utilizan en las secciones.

Seccion PRODUCTOS.HTML.
> En esta seccion encontramos el listado de productos que es tomado desde un .json, la misma al tener precios en dolares, en el fetch y antes de la funcion, se realiza la conversion de moneda utilizando una variable. La finalidad de esto es para cambiar solamente el valor de esa variable DOLLAR y no todos los elementos del json que contienen PRECIO.
> Podemos realizar la busqueda por ingreso, al realizar click en carro de compras para adicionarlo al carrito, se despliega un modal informando que el producto es ingresado mostrando su imagen correspondiente.(Se utiliza libreria)

Seccion PADMOUSES
> En la misma se aplica Api, en este caso de Marvel, solicitando un ingreso por input y devuelve, en caso de existir, imagenes referentes al ingreso por input. Se utilizan endpoint y valores como imagenes y nombres, en algunos no aparecen las imagenes pero ya es un tema de la Api.

Seccion FINALIZAR COMPRA.
> En esta seccion, se muestra lista del array obtenido de la seccion PRODUCTOS (carrito) utilizando json parse y getitem, se utiliza tabla insertando imagen, nombre, cantidad y precio. (localstorage). Se adiciona botones para sumar o restar cantidades de cada item disponible en pantalla.
> En caso de eliminar todos los items, aparece modal informando que el carrito esta vacio.
> En caso de ingresar a esa seccion sin haber seleccionado previamente algun item (array vacio), aparece modal indicando que no hay productos para mostrar.
> Hay algunos botones para calcular precios en cuotas (los precios no son reales ni tampoco el valor de cuotas).
> Finalmente se deja un boton de Mercado Libre, la cual deriva al sitio MP utilizando la Api como ejemplo.

Seccion CONTACTO.
> Es una seccion simple que se va a utilizar para recibir comentarios, nombre y mail del usuario en caso de dejar un texto, en todos los casos tiene valor "required".
> Tambien se muestra los mapas de las sucursales como orientacion al usuario.
> Si bien es una seccion simple, quiero demostrar que salvo el header, el resto fue generado utilizando JS.

Seccion MODIFICAR STOCK.
> Se utiliza para ingreso de productos que no se encuentran en la lista mostrada en pantalla, el mismo es tomado del array productos, lo cual al ingresar un codigo EAN por input, se verifica si existe, en caso positivo se indica con un modal que el producto ya se encuentra en la lista. En caso de ser negativo lo ingresa a la lista. En caso de que el codigo sea incorrecto, muestra en modal que el producto no existe en catalogo. En cabecera de este archivo dejo un par de codigos que no estan ingresados en la lista PRODUCTOS para interactuar.
> Se dejan dos botones para mostrar u ocultar listado.
> Estos codigos corresponden a items que estan en otro array diferente al mostrado en seccion PRODUCTOS.


//////////////////

Se utiliza Jquery, metodos, storage, valores de entrada, array.
Se deja el menor codigo posible en los HTML, logrando hacer la gran mayoria en los archivos JS. Ejemplo, el Tag Footer.
Desde la seccion INDEX se podra acceder a todas las demas secciones.
