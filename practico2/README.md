# Práctico número 2: Piedra, Papel o Tijera.

## Explicación

El juego consiste en seleccionar una de las tres jugadas disponibles para competir contra la computadora, que realizará una jugada al azar. El ganador de cada ronda sumará un punto. El primero en llegar a tres puntos ganará la partida.

**¿Quién gana a quién?**

* La tijera gana al papel porque le puede cortar.
* La piedra gana a las tijeras porque las rompe.
* El papel gana a la piedra porque la envuelve.

La elección de las jugadas se realiza mediante el menú que se encuentra en la parte de abajo.

Las jugadas serán mostradas en el centro de la pantalla con imágenes de manos.

En la parte superior se encuentran los nombres y los puntos de ambos jugadores.

Haciendo clic sobre el nombre del jugador (por default es Jugador) es posible cambiarlo a gusto.

Al finalizar la partida se desplega un cartel con el resultado y un botón para comenzar una nueva.

## Para el profesor.

### Proceso.

Me basé en el código javascript que hice para el práctico 4 del curso anterior.

Primero hice las imágenes utilizando una página de pixel art. Luego ordené los elementos con flexbox y usé unidades de longitud relativa para intentar que se adapten a distintos tamaños de pantalla. También coloqué un cartel utilizando las propiedades visibility y transition para lograr que se despliegue con una animación al finalizar la partida. Con JavaScript capturé las elecciónes del jugador y las de la computadora. La explicación de las funciones está en el código js.
Finalmente había olvidado la opción de poder cambiar el nombre del jugador. Coloqué un input desplegable al hacer clic sobre el nombre y usé el value para modificar el texto. Usé un método addEventListener en el input para permitir que se guarde el nuevo nombre presionando la tecla Enter, con una función que toma como parámetro el objeto e.Para terminar realicé validaciones para que el campo de nombre no esté vacío.

### Errores.

Los principales errores ocurrieron al darle el aspecto con css. Opté por intentar simplificar la interfaz para comprender mejor lo que estaba haciendo.

Para agregar la opción de cambiar el nombre tuve que separarlo de la cantidad de puntos en dos elementos distintos. También tuve un error cuando agregé el addEventListener al input, ya que hice todo en una función, lo que provocó que la alerta se envíe más de una vez.

### Pruebas.

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

