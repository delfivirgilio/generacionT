let opciones = ["Piedra", "Papel", "Tijera"];
        let jugarDeNuevo = true;

        while (jugarDeNuevo) {
            
            let eleccionUsuario = prompt("Ingresa una de las siguientes opciones: Piedra, Papel o Tijera");

            
            if (!opciones.includes(eleccionUsuario)) {
                alert("Opción inválida. Por favor, ingresa una de las opciones: Piedra, Papel o Tijera");
                continue; 
            }

          
            let indiceAzar = Math.floor(Math.random() * 3);
            let eleccionAzar = opciones[indiceAzar];

            
            alert(`Tu elección: ${eleccionUsuario}\nElección del azar: ${eleccionAzar}`);

            
            if (eleccionUsuario === eleccionAzar) {
                alert("Es un empate");
            } else if (
                (eleccionUsuario === "Piedra" && eleccionAzar === "Tijera") ||
                (eleccionUsuario === "Papel" && eleccionAzar === "Piedra") ||
                (eleccionUsuario === "Tijera" && eleccionAzar === "Papel")
            ) {
                alert("Ganaste");
            } else {
                alert("Perdiste. Intenta de nuevo.");
            }
            jugarDeNuevo = confirm("¿Quieres volver a jugar?");
        }