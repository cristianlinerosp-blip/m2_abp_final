

//FUNCIÓN QUE AL SER LLAMADA ASIGNA EL BALANCE ACTUAL AL ELEMENTO DEL DOM QUE LO MUESTRA

function actualizarMontoInfo(){
    document.getElementById("balance-info").textContent = formatearMoneda(balance);
}


//CAPTURAMOS EL FORMULARIO DE DEPOSITO PARA OBTENER EL NUEVO MONTO Y ACTUALIZAR EL BALANCE
const formDeposito = document.getElementById("form-deposito");


formDeposito.addEventListener("submit", function(event){
    event.preventDefault();

    //UNA VEZ QUE SE HAGA CLICK EN EL FORM CAPTURAS EL INPUT Y OBTENEMOS EL VALOR INGRESADO DESDE EL ATRIBUTO VALUE
    let monto = document.getElementById("monto").value;

    //CONVERTIMOS EL MONTO INGRESADO EN EL INPUT EN UN NÚMERO (TODO LO CAPTURADO MEDIANTE INPUTS ES TEXTO)
    monto = Number(monto)

    //LLAMAMOS A LA FUNCIÓN AGREGARBALANCE DEL ARCHIVO LOGICA_GLOBAL PARA ACTUALIZAR EL VALOR DEL BALANCE CON EL MONTO OBTENIDO.
    agregarBalance(monto);

    //NECESITAMOS AHORA VOLVER A ACTUALIZAR EL MONTO DE BALANCE EN PANTALLA CON EL NUEVO VALOR
    actualizarMontoInfo();

});


// FUNCIÓN  QUE SE EJECUTA INMEDIATAMENTE AL CARGAR LA PÁGINA

function main() {
    //DESDE AQUI LLAMAMOS A LA FUNCIÓN QUE NOS MUESTRE EL MONTO ACTUAL DEL BALANCE
    actualizarMontoInfo();
}

main();
