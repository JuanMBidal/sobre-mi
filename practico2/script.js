const elecciones = ["piedra", "papel", "tijeras"];

const popup = document.getElementById("popup");
const mostrarPuntosJugador = document.getElementById("puntos");
const mostrarPuntosCPU = document.getElementById("puntosCPU");
const displayJugador = document.getElementById("resultado_jugador");
const displayCpu = document.getElementById("resultado_cpu");

let nombreJugador = document.getElementById("nombreJugador");
let puntosJugador = 0;
let puntosCPU = 0;


function cambiarNombre() {
    let inputNombre = document.getElementById("inputNombre");
    inputNombre.classList.add("showInputNombre");
    inputNombre.value = ''
}



function nuevaPartida() {
    puntosJugador = 0;
    puntosCPU = 0;
    mostrarPuntosJugador.innerHTML = 0
    mostrarPuntosCPU.innerHTML = "0 PC"
    displayJugador.src = "piedra.png";
    displayCpu.src = "piedra.png";
    popup.classList.remove("openPopup");
}


//Esta función abre el cartel de partida finalizada.
function partidaFinalizada() {
    if (puntosJugador > puntosCPU) {
        document.getElementById("resultadoPartida").innerHTML = "Victoria";
        popup.classList.add("openPopup");
    } else {
        document.getElementById("resultadoPartida").innerHTML = "Derrota";
        popup.classList.add("openPopup");
    }
}



// Comprar las jugadas.
function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if ((jugadaComputadora==="piedra" && jugadaUsuario=="tijeras") || (jugadaComputadora==="tijeras" && jugadaUsuario==="papel") || (jugadaComputadora=="papel" && jugadaUsuario=="piedra")) {
        return ++puntosCPU;
    }
    else if (jugadaComputadora === jugadaUsuario) {
        
    }
    else {
        return ++puntosJugador;
    }
}

//Función para hacer la jugadas y terminar la partida.
function juego(jugadaUsuario) {

    let jugadaComputadora = elecciones[Math.floor(Math.random()*3)];
    
    if (puntosCPU === 3 || puntosJugador === 3) {    
    }

    else if (inputNombre.classList.contains("showInputNombre")) {
        alert("Ingrese un nombre");
    }
    else {
        determinarGanador(jugadaUsuario, jugadaComputadora);
        displayCpu.src = jugadaComputadora + ".png";
        displayJugador.src = jugadaUsuario + ".png";
        mostrarPuntosJugador.innerHTML = puntosJugador;
        mostrarPuntosCPU.innerHTML = puntosCPU + " PC";
        if (puntosCPU===3 || puntosJugador===3) {
            partidaFinalizada();
        }
    }
}


//Guardar el nombre del jugador con Enter.
inputNombre.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        if (inputNombre.value != '') {
          inputNombre.classList.remove("showInputNombre");
          return nombreJugador.innerText = inputNombre.value;
        }
        else {
            alert("Campo vacío");
        }
    }
})