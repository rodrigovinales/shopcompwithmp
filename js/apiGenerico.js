const publicKey = "82462bc7b12ed6c831359d463f566ed7";
const hash5 = "c8874bd8adc2d873d5198b2b5314d864"

marvel = (ingreso) => {
  const urlAPI = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${ingreso}&ts=1&apikey=${publicKey}&hash=${hash5}`;
  const container = document.getElementById('marvel-row');
  let contentHTML = '';

  fetch(urlAPI)
    .then(res => res.json())
    .then((json) => {

// POR COMO ENTREGABA INFORMACION LA API, SE LO LLAMA DESDE JSON.DATA.RESULTS, Y LUEGO LOS DATOS QUE YO QUERIA PINTAR EN HTML.

      for (const listado of json.data.results) {

        contentHTML += `
            <div class="col-md-4">
                  <img src="${listado.thumbnail.path}.${listado.thumbnail.extension}" alt="${listado.name}" class="img-thumbnail">
                <h3 class="title">${listado.name}</h3>
            </div>`;
      }
      container.innerHTML = contentHTML;
    })
};

$("#formu").append('<form id="formulario"></form>')
const formulario = $('#formulario')

formulario.append(`

    <input class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Ingrese personaje de MARVEL a buscar - Ejemplo: iron man, spider, wolverine...(Puede que algunos no aparezcan o aparezcan sin imagen).">
    <div class="input-group input-group-lg">
    <button class="btn btn-lg btn-danger type="submit">BUSCAR</button>
`)

formulario.submit(e => {
  e.preventDefault()
  const ingresoABuscar = $(e.target).children()
  marvel($(ingresoABuscar[0]).val())
  $(formulario)[0].reset()
})


