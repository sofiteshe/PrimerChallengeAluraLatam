function minusculaAcento(e) {
    e.value = e.value.toLowerCase();
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muneco.src ="encriptado.png";
    } else {
        muneco.src ="encriptemos.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes Ingresar algun texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
          .replace(/ufat/gi,"u")
          .replace(/ober/gi,"o")
          .replace(/ai/gi,"a")
          .replace(/imes/gi,"i")
          .replace(/enter/gi,"e"); 

        if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
            muneco.src = "desencriptar.png";
        } else {
        muneco.src ="encriptemos.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado.";
        parrafo.textContent = "Ingresa el texto que deseas desencriptar";
        alert("Debes Ingresar algun texto");
    }

}

