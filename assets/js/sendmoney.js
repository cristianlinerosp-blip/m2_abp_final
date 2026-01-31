let contacto1 = {
    nombre: "Pedro Soto",
    cbu: "111111111",
    alias: "Pepo",
    banco: "Banco estado"
}

let contacto2 = {
    nombre: "Marta Godoy",
    cbu: "222222222",
    alias: "Tita",
    banco: "Banco Falabella"
}

let listaContactos = [contacto1, contacto2];

$(function() {


    function mostrarContactos(contactos){

        let elementos = "";

        for (const contacto of contactos) {

            let {nombre, cbu, alias, banco} = contacto;

            elementos += `
            
                <li class="list-group-item">
                    <div class="contact-info">
                        <span class="contact-name">${nombre}</span>

                        <span class="contact-details">CBU: ${cbu}, Alias: ${alias}, Banco: ${banco}</span>
                    </div>
                </li>
            `; 
            
        };

        $("#contactList").html(elementos);

    };

    function filtrarContactos(textoFiltro){


        let listaFiltrada = listaContactos.filter(function(contacto){

            let { nombre, alias, banco, cbu } = contacto;

            //NORMALIZAR LOS NOMBRES Y EL TEXTO BUSCADO EN MINÚSCULAS
            nombre = nombre.toLowerCase();
            alias = alias.toLowerCase();
            banco = banco.toLowerCase();
            
            textoFiltro = textoFiltro.toLowerCase();


            let reglaNombre = nombre.includes(textoFiltro);
            let reglaAlias = alias.includes(textoFiltro);
            let reglaBanco = banco.includes(textoFiltro);
            let reglaCBU = cbu.includes(textoFiltro);

            if(reglaNombre || reglaAlias || reglaBanco || reglaCBU){
                return contacto;
            }
            
        });

        mostrarContactos(listaFiltrada);


    }


    function init(){
        mostrarContactos(listaContactos);
    }

    init();





    //EVENTOS CON JQUERY




    //EVENTO BARRA DE BUSQUEDA

    $("#buscarContacto").on("input", function(){

        //CAPTURAMOS EL CONTENIDO (VALUE) DEL INPUT
        let textoBusqueda = $(this).val();

        filtrarContactos(textoBusqueda);

    });


});