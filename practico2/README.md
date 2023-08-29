# Práctico N2: Piedra, Papel o Tijera.

## Estructura básica HTML y estilos CSS.

 `index.html` este es el archivo base de todo el proyecto.

 `style.css` archivo css para darle formato a la interfaz.

## Obtención del nombre del jugador.

```javascript 
 function cambiarNombre() {
    let inputNombre = document.getElementById("inputNombre");
    inputNombre.classList.add("showInputNombre");
    inputNombre.value = ''
}
```
y

```javascript 
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
```
La función `cambiarNombre()` despliega el input para cambiar el nombre cuando se hace clic en el nombre del jugador. el event listener guarda el nuevo valor del nombre presionando enter y valida que el campo de texto no esté vacío.

## Selección de la opción del jugador y del oponente (PC).

```javascript 
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
```
Esta función captura la elección del usuario al presionar una de las imágenes, genera la jugada de la computadora y contiene una validación para que no se pueda realizar una jugada mientras se está cambiando el nombre del jugador. También muestra en la pantalla las jugadas correspondientes, actualiza los puntos y termina la partida en caso de que se llegue a tres puntos.

------

## Determinación del ganador.

```javascript 
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
```
Esta función compara las dos jugadas y determina el ganador sumando el punto al jugador correspondiente en caso de no haber empate.

------

## Anunciar al ganador y reiniciar el juego.

```javascript 
function partidaFinalizada() {
    if (puntosJugador > puntosCPU) {
        document.getElementById("resultadoPartida").innerHTML = "Victoria";
        popup.classList.add("openPopup");
    } else {
        document.getElementById("resultadoPartida").innerHTML = "Derrota";
        popup.classList.add("openPopup");
    }
}
```
Esta función despliega un cartel anunciando el resultado de la partida.

------

## Pruebas.

**Primer partida:**

>1er jugada, Piedra vs Papel, Jugador 0, Pc 1.
>2da jugada, Tijera vs Papel, Jugador 1, Pc 1.
>3er jugada, Piedra vs Papel, Jugador 1, Pc 2.
>4ta jugada, Papel vs Piedra, Jugador 2, Pc 2.
>5ta jugada, Papel vs Piedra, Jugador 3, Pc 2.

**Segunda partida:**
>1er jugada, Piedra vs Tijera, Jugador 1, Pc 0.
>1er jugada, Piedra vs Piedra, Jugador 1, Pc 0.
>1er jugada, Papel vs Tijera, Jugador 1, Pc 1.
>1er jugada, Tijera vs Papel, Jugador 2, Pc 1.
>1er jugada, Tijera vs Papel, Jugador 3, Pc 1.

**Tercer partida:**
>1er jugada, Piedra vs Papel, Jugador 0, Pc 1.
>2da jugada, Piedra vs Piedra, Jugador 0, Pc 1.
>3er jugada, Piedra vs Papel, Jugador 0, Pc 2.
>4ta jugada, Piedra vs Tijera, Jugador 1, Pc 2.
>5ta jugada, Piedra vs Tijera, Jugador 2, Pc 2.
>6ta jugada, Piedra vs Piedra, Jugador 2, Pc 2.
>7ma jugada, Piedra vs Tijera, Jugador 3, Pc 2.

**Campo de texto vacío y Enter: Alerta**

**Campo de texto vacío y presionar una botón de jugada: Alerta**

----

## Errores.

Los principales errores ocurrieron al darle el aspecto con css. Opté por intentar simplificar la interfaz para comprender mejor lo que estaba haciendo.

Para agregar la opción de cambiar el nombre tuve que separarlo de la cantidad de puntos en dos elementos distintos. También tuve un error cuando agregé el addEventListener al input, ya que hice todo en una función, lo que provocó que la alerta se envíe más de una vez.

-----

## Enlaces.

* https://www.pixilart.com/ (Página de pixel art con la que hice las imágenes)

* https://www.w3schools.com


