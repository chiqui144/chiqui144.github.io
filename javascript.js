$(document).ready(function(){

$('#Select').on('change', function(){

var SelectValor = '#' + $(this).val();
$('#fila1').children('div').hide();
$('#fila1').children(SelectValor).show();


  
});

});



$(document).ready(function(){
    $("#EXTREMO-INFERIOR").click(function(){
        $("#EXTREMO-INFERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-SUPERIOR").click(function(){
        $("#EXTREMO-SUPERIORMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-DERECHO").click(function(){
        $("#EXTREMO-DERECHOMODAL").modal();
    });
});

$(document).ready(function(){
    $("#EXTREMO-IZQUIERDO").click(function(){
        $("#EXTREMO-IZQUIERDOMODAL").modal();
    });
});


<!--INTERNO-->

$(document).ready(function(){
    $("#INTERNO-IZQUIERDO").click(function(){
        $("#INTERNO-IZQUIERDOMODAL").modal();
    });
});


$(document).ready(function(){
    $("#INTERNO-DERECHO").click(function(){
        $("#INTERNO-DERECHOMODAL").modal();
    });
});

<!--COLGAROPA-->

$(document).ready(function(){
    $("#COLGAROPA").click(function(){
        $("#COLGAROPAMODAL").modal();
    });
});

<!--SQUADS-->

$(document).ready(function(){
    $("#SQUADS").click(function(){
        $("#SQUADSMODAL").modal();
    });
});

<!--RIGHT SECTION-->

$(document).ready(function(){
    $("#DERECHO-DIVISION1").click(function(){
        $("#DERECHO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#DERECHO-DIVISION2").click(function(){
        $("#DERECHO-DIVISIONMODAL").modal();
    });
});

<!--CENTER SECTION-->

$(document).ready(function(){
    $("#CENTRAL-DIVISION1").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CENTRAL-DIVISION2").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#CENTRAL-DIVISION3").click(function(){
        $("#CENTRAL-DIVISIONMODAL").modal();
    });
});
<!--LEFT SECTION-->

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION1").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#IZQUIERDO-DIVISION2").click(function(){
        $("#IZQUIERDO-DIVISIONMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOSMADERA").click(function(){
        $("#TORNILLOSMADERAMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOSMADERA2").click(function(){
        $("#TORNILLOSMADERAMODAL2").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOMETALICO").click(function(){
        $("#TORNILLOMETALICOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TORNILLOMETALICO2").click(function(){
        $("#TORNILLOMETALICO2MODAL").modal();
    });
});

<!--LEFT SECTION---------------------------------------------------->
$(document).ready(function(){
    $("#PUERTA-EXTREMO-IZQUIERDA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-INTERNA-IZQUIERDA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-CENTRAL1").click(function(){
        $("#PUERTA-CENTRAL-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-INTERNA-DERECHA1").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});
<!--LEFT SECTION-->
$(document).ready(function(){
    $("#PUERTA-EXTREMO-DERECHA2").click(function(){
        $("#PUERTA-EXTREMO-IZQUIERDA-MODAL").modal();
    });
});


<!--Contenedor-->

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#LOCK").click(function(){
        $("#CERRADURA1").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#BOX").click(function(){
        $("#CAJONES1").modal();
    });
});

<!--Contenedor-->

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#SLIDER").click(function(){
        $("#SLID").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#MANIJA").click(function(){
        $("#MANIJAMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#MANIJA-CAJON").click(function(){
        $("#MANIJA-CAJONMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TRIPLEX-IZQUIERDO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TRIPLEX-CENTRAL").click(function(){
        $("#TRIPLEX-CENTRALMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#TRIPLEX-DERECHO").click(function(){
        $("#TRIPLEX-IZQUIERDOMODAL").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#CIRCULO1").click(function(){
        $("#CIRCULO").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#CIRCULO2").click(function(){
        $("#CIRCULO").modal();
    });
});

<!--LEFT SECTION-->
$(document).ready(function(){
    $("#CIRCULO3").click(function(){
        $("#CIRCULO").modal();
    });
});


/*

<!--SELECTOR-->
function listenToClicks(){
    const buttons = document.querySelectorAll(".clickable-button");



    buttons.forEach((button) => {
    button.addEventListener("click", () => {
        activateBoxes(button.id);
    });
   });
}

   function activateBoxes(buttonId){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        if (box.classList.contains(buttonId)) {
            box.dataset.active = true;
        }else{
            box.dataset.active = false;
        }
    });
   }

   listenToClicks();
<!--SELECTOR-->

 
*/

<!--SELECTOR-->
function listenToClicks(){
    const botones = document.querySelectorAll(".clickable-g");



    botones.forEach((g) => {
    g.addEventListener("click", () => {
        activateBoxes(g.id);
    });
   });
}

   function activateBoxes(gId){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        if (box.classList.contains(gId)) {
            box.dataset.active = true;
        }else{
            box.dataset.active = false;
        }
    });
   }
<!--SELECTOR-->

 listenToClicks();


const btnDepartamentos = document.getElementById('btn-departamentos'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if(!esDispositivoMovil()){
        grid.classList.remove('activo');
    }
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if(!esDispositivoMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        };
    });
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    if(contenedorEnlacesNav.classList.contains('activo')){
        contenedorEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        contenedorEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
});



btnCerrarMenu.addEventListener('click', (e)=> {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) => {
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
});