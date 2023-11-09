let numero1, numero2;

        while (true) {
            numero1 = parseInt(prompt("Ingresa el primer número "));
            if (numero1 === 0) {
                break;
            }

            numero2 = parseInt(prompt("Ingresa el segundo número"));
            if (numero2 === 0) {
                break;
            }

            if (numero1 === numero2) {
                alert("Los números son iguales. Por favor, ingresa números distintos.");
            } else {
                let mayor = numero1 > numero2 ? numero1 : numero2;
                alert(`El número mayor es: ${mayor}`);
            }
        }