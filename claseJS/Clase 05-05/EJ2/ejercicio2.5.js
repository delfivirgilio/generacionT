let numero;
let cantidadPositivos = 0;

    while (true) {
            numero = parseInt(prompt("Ingresa un número entero"));

            if (numero < 0) {
                break;
            }

            if (numero > 0) {
                cantidadPositivos++;
            }
    }

        alert(`Ingresaste ${cantidadPositivos} numero/s positivo/s`);