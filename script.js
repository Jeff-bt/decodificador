var entrada = document.getElementById("entrada");
var saida = document.getElementById("saida");
var informacao = document.getElementById("informacao");
var erroCopiar = document.getElementById("erroCopiar"); 
var textoCopiado;

/*Função que simula o sleep*/
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
/*------------------------*/

async function criptografar(){
    if (entrada.value == "" || entrada.value == "Digite seu texto"){
        entrada.value = "Digite seu texto";
        entrada.style.color = "red";
        await sleep(500);
        entrada.style.color = "#0A3871";
        entrada.value = "";

    } else {
        saida.value = entrada.value
        .replace(/e/gi, 'enter')
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        entrada.value = "";
        saida.style.backgroundImage = "None";
        informacao.style.opacity= "0";
        saida.style.color = "#6b1313";
    }
}

async function descriptografar(){
    if (entrada.value == "" || entrada.value == "Digite seu texto"){
        entrada.value = "Digite seu texto";
        entrada.style.color = "red";
        await sleep(500);
        entrada.style.color = "#0A3871";
        entrada.value = "";
    } else {
        saida.value = entrada.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        entrada.value = "";
        saida.style.backgroundImage = "None";
        informacao.style.opacity= "0";
        saida.style.color = "#6b1313";
    }
}

async function copiar(){
    navigator.clipboard.writeText(saida.value);
    if (saida.value == ""){
        erroCopiar.style.color = "red";
        await sleep(500);
        erroCopiar.style.color = "black";
    } else {
        saida.value = "Texto copiado"; 
        saida.style.color = "green";
        await sleep(1000);
        saida.value = ""; 
    }
}

