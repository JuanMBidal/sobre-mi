# Práctico número 1: Calculadora simple.


## Comenzando

Esta calculadora permite resolver las siguientes operaciones entre dos números:
* Suma
* Resta
* Multiplicación
* División
* Promedio

**La calculadora permite ingresar números de hasta 5 dígitos y devuelve resultados con un máximo de 10.**

## Modo de Uso

1. Seleccionar el operador en el menú desplegable

2. Colocar los operados en los campos de texto.

3. Presionar el botón con el símbolo **=**.

4. El resultado aparecerá en la parte de abajo.

5. Usar el botón **AC** para borrar.

## Pruebas

### Prueba de cálculos

**Operadores: 123 y 45**

|resultados| suma | resta |multiplicación | división | promedio |
| :---:    |:---: | :---: | :---:         | :---:    | :---:    |
|esperados |168   |78     |5535           |2.73333333|84        |
|obtenidos |168   |78     |5535           |2.73333333|84        |

**Operadores: 76.48 y 30.2**

|resultados| suma | resta |multiplicación | división | promedio |
| :---:    |:---: | :---: | :---:         | :---:    | :---:    |
|esperados |106.68|46.28  |2309.696       |2.53245033|53.34     |
|obtenidos |106.68|46.28  |2309.696       |2.53245033|53.34     |

**Operadores: -70.5 y 21.84**

|resultados| suma | resta |multiplicación | división | promedio |
| :---:    |:---: | :---: | :---:         | :---:    | :---:    |
|esperados |-48.66|-92.34 |-1539.72       |-3.2280219|-24.33    |
|obtenidos |-48.66|-92.34 |-1539.72       |-3.2280219|-24.33    |

### Mensajes de error

La calculadora devuelve un mensaje de error al ingresar números no válidos, al no seleccionar un operador, o al intentar dividir por 0.

## Construido con

Para la parte de JavaScript me basé en el código de la calculadora simple que hicimos en la parte anterior del curso.

También saqué información de la página https://www.w3schools.com/.
