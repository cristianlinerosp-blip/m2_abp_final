
if(localStorage.getItem("login")){
    alert("Usted ya unicio sesión!");
    location.href = "menu.html";
}

// 1. Agrega un evento al botón "Iniciar sesión".

//CAPTURAMOS EL ELEMENTO POR SU ID
const formLogin = document.getElementById("form-login");

//AGREGR EL EVENTO AL ELEMENTO CAPTURA
formLogin.addEventListener("submit", function(event){
    //detengo el evento por defecto
    event.preventDefault();

    //desde aquí creo la lógica que piden 

    //CAPTURAMOS EL INPUT CUYO ID ES "email"
    let email = document.getElementById("email").value;
    //CAPTURAMOS EL INPUT CUYO ID ES "password"
    let password= document.getElementById("password").value;

    // Implementa la funcionalidad de validar las credenciales ingresadas utilizando JavaScript. Si las credenciales son correctas:

    if(email == "admin@admin.com" && password == "123456"){
        //ESTE BLOQUE SE EJECUTA SI LAS CONDICIONES SIN VERDADERAS
        // - mostra un mensaje de éxito y redirige a la pantalla del menú principal (menu.html).

        alert("Login exitoso.");

        localStorage.setItem("login", true);

        location.href = "menu.html";
    }else{
        //SE EJECUTANDO CUANDO NO SE CUMPLAN LAS CONDICIONES ANTERIORES
        //- Si las credenciales son incorrectas, mostrar un mensaje de error.
        alert("Email y/o contraseña incorrectos.");
    }
});

