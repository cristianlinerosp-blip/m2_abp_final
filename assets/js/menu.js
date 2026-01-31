/*
Agregar eventos a estos tres botones: "Depositar", "Enviar Dinero" y 
"Últimos Movimientos" para que al hacer clic aparezca una leyenda que diga, 
redirigiendo a “nombre de la pantalla seleccionada”. EJemplo: redirigiendo a últimos movimientos.
*/

function mostrarMensaje(mensaje, pagina = "index.html") {
    let mensajeInfo = document.getElementById("mensaje-info");

    mensajeInfo.textContent = mensaje;

    setTimeout(function () {
        window.location.href = pagina;
    }, 1500);
}

document
    .getElementById("btn-deposit")
    .addEventListener("click", function (event) {
        let mensaje = "redirigiendo a la página de depósitos...";

        mostrarMensaje(mensaje, "deposit.html");
    });

document
    .getElementById("btn-sendmoney")
    .addEventListener("click", function (event) {
        let mensaje = "redirigiendo a la página de envío de dinero...";
        mostrarMensaje(mensaje, "sendmoney.html");
    });

document
    .getElementById("btn-transactions")
    .addEventListener("click", function (event) {
        let mensaje = "redirigiendo a la página de transacciones...";
        mostrarMensaje(mensaje, "transactions.html");
    });


function main(){

    document.getElementById("balance-info").textContent = formatearMoneda(balance);
}

main();
