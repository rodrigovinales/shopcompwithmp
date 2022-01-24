$(() => {
  setTimeout(() => {
    $('#modalWelcome').modal('show')
  }, 2000)
}
);


$('#modalBienvenida').prepend(` <div class="modal fade" id="modalWelcome" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content modalIndex">
    <div class="modal-header">
      <br>
      <br>

    </div>
    <div class="modal-body">
      <h5>BIENVENIDO!!</h5> Podras ver nuestros productos.
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
    </div>
  </div>
</div>
</div>

`);

$('#muestraCarousel').append(`<div id="demo" class="carousel slide carouselEstilado" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active" data-interval="4000">
    <img src="./images/productos/WEBCAM1000x.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./images/productos/tvPARLANTES.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./images/productos/GMRC.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./images/productos/FTATX850.jpg" alt="">
  </div>
  <div class="carousel-item" data-interval="4000">
    <img src="./images/productos/GTNC.jpg" alt="">
  </div>
</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>

</div>

`)
