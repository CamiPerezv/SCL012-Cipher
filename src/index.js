//declarando parametros para cifrar//

const cifrar = document.getElementById("cifrar");
  cifrar.addEventListener("click", function(){
  
    const ingresaTexto = document.getElementById("ingresaTexto").value;//obteniendo valor de textarea//
    const desplazamiento = document.getElementById("desplazamiento").value;//obteniendo valor de desplazamiento//
  
    let resultadoCifrar = cipher.encode(ingresaTexto,desplazamiento);
    document.getElementById("resultadocifrar").value = resultadoCifrar;
});


//declarando parametros para descifrar//

const descifrar = document.getElementById("descifrar");
  descifrar.addEventListener("click", function(){
  
    const ingresaTexto = document.getElementById("ingresaTextoCifrado").value;//obteniendo valor de textarea//
    const desplazamiento = document.getElementById("desplazamientoDescifrar").value;//obteniendo valor de desplazamiento//
  
    let resultadoDescifrar = cipher.decode(ingresaTexto,desplazamiento);
  document.getElementById("resultadodescifrar").value = resultadoDescifrar;
});



//mostrando y ocultando div//


//div bienvenida//const

const volverInicio = document.getElementById("botonAtras");//declarando variable que mostrará pantalla inicial//
      volverInicio.addEventListener("click", pantallaInicial); //asignandole una función//

     
function pantallaInicial(){//funcion que ocultara y mostrará pantalla inicial desde codificar//
  document.getElementById("bienvenida").style.display="";
  document.getElementById("decodificar").style.display="none";
  document.getElementById("codificar").style.display="none";
}

//div pantalla inicial//

const volverIniciodes = document.getElementById("botonAtras2");
      volverIniciodes.addEventListener("click", pantallaInicial2);

function pantallaInicial2(){//funcion que ocultara y mostrará pantalla inicial desde decodificar//
    document.getElementById("bienvenida").style.display="";
    document.getElementById("decodificar").style.display="none";
    document.getElementById("codificar").style.display="none";
}

//div codificar//

const codificarVisible = document.getElementById("mostrarCifrar");
      codificarVisible.addEventListener("click", mostrarCodificar);

function mostrarCodificar(){
  document.getElementById("codificar").style.display="block";
  document.getElementById("bienvenida").style.display="none";
  document.getElementById("decodificar").style.display="none";
}


//div decodificar//

const decodificarVisible = document.getElementById("mostrarDescifrar");
      decodificarVisible.addEventListener("click", mostrarDescifrar);

function mostrarDescifrar(){
    document.getElementById("decodificar").style.display="block";
    document.getElementById("codificar").style.display="none";
    document.getElementById("bienvenida").style.display="none";
}


//limpiar campos pantalla cifrar//

const limpiarResultado = document.getElementById("limpiarbox");
      limpiarResultado.addEventListener("click", limpiar);

function limpiar() {

    document.getElementById('resultadocifrar').value = '';
    document.getElementById('ingresaTexto').value = '';
    document.getElementById('desplazamiento').value = '';
}


//limpiar campos pantalla descifrar//

const limpiarResultado2 = document.getElementById("limpiarboxdeco");
      limpiarResultado2.addEventListener("click", limpiar2);

function limpiar2() {

    document.getElementById('ingresaTextoCifrado').value = '';
    document.getElementById('resultadodescifrar').value = '';
    document.getElementById('desplazamientoDescifrar').value = '';
}