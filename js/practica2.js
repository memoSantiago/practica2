const input = document.getElementById( 'input-dias' );
const btn = document.getElementById( 'btn-enviar' );
const contRespuesta = document.querySelector( '.contenedor-respuesta' );
var anio = 2000;
var mes = 1;
var dia = 1;


calc_anio = totalDias => {
    
    //Para este programa supondremos que cada mes tiene 30 dias
    //por lo que un año tendria 360 dias ( 12 * 30 = 360 )
    anio += Math.floor( totalDias/360 );
    totalDias %= 360;
    mes += Math.floor( totalDias/30 );
    dia += totalDias%30;


    if( dia > 30 ){
        dia -= 30;
        mes++;
    }

    if( mes > 12 ){
        mes -= 12;
        anio++;
    }

    contRespuesta.innerHTML = '';
    contRespuesta.innerHTML = `
        <p>Año actual: ${dia}/${mes}/${anio}</p>
    `;

    contRespuesta.classList.remove( 'ocultar' );

}


btn.addEventListener( 'click', function( event ) {
    event.preventDefault();

    calc_anio( input.value );

});




