let estado = prompt("Hola! Como esta?");
estado = estado.toLowerCase();

if (estado === "triste") {
    alert("Animo! Todo va a estar bien");
}

let numSecreto = 6;
let numIngr = parseInt(prompt("Cual es su numero secreto?"));
if(numIngr !== numSecreto){
    alert("El numero es incorrecto");
}

let contraseña = "Contraseña123";
let contIng = prompt("Ingrese la contraseña");
if(contIng===contraseña){
    window.location = "http://www.google.com"

}
else{
    alert("Contraseña incorrecta")
}