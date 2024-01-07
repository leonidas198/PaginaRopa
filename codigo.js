function cerrarVtanaHombres() {
    //alert("con la x cierra el menu");
    document.getElementById("VentanaH").style.height = "0%";
}

function mostrarVtanaHombres() {
    //alert("MENU abierto");
    document.getElementById("VentanaH").style.height = "45%";
    document.getElementById("VentanaM").style.height = "0%";

}
function cerrarVtanaMujeres() {
    //alert("con la x cierra el menu");
    document.getElementById("VentanaM").style.height = "0%";
}

function mostrarVtanaMujeres() {
    //alert("MENU abierto");
    document.getElementById("VentanaM").style.height = "45%";
    document.getElementById("VentanaH").style.height = "0%";

}


const fechaElement = document.getElementById("fecha");

if (fechaElement) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    fechaElement.innerHTML = new Date().toLocaleDateString('es-ES', options);
}



function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const horaActual = `${hora}:${minutos}:${segundos}`;
    document.getElementById("hora_actual").innerHTML = horaActual;
}

setInterval(actualizarHora, 1000);
