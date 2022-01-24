
$("#formulario").prepend(`<form id="esteFormulario">
                <input type="text" class="form-control-lg" id="input1" placeholder="Nombre completo" required>
                <input type="email" class="form-control-lg" id="input2" placeholder="email" required>
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Comentario</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <input type="submit">
                   </form>`);

$("#esteFormulario").submit(function (e) {

    e.preventDefault();
    alert(`Gracias por tu mensaje, a la brevedad sera respondido`);
    $("#esteFormulario")[0].reset();
});


$("#mapMoreno").append(`<div class="col">
<h3 class="lead border border-primary text-center"> SUCURSAL MORENO </h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.1372587431815!2d-58.79415568519336!3d-34.65123636752021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc94571ee5503d%3A0xd5c74c40bce07391!2sClaudio%20Mar%C3%ADa%20Joly%202887%2C%20B1744HIY%20Moreno%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1634858856102!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>`);

$("#mapRodriguez").append(`<div class="col">
<h3 class="lead border border-primary text-center"> SUCURSAL GENERAL RODRIGUEZ </h3>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.0186486150321!2d-58.95141924195218!3d-34.60778651601155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc8fba4e0bdf0f%3A0xcbaf6ae147ba72de!2sShop%20Computers!5e0!3m2!1ses!2sar!4v1634862422469!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</div>
`);