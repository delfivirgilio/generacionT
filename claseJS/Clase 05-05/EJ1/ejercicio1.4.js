let genero = prompt("Hola ! Es hombre o mujer?");
genero = genero.toLowerCase();

let edad = parseInt(prompt("Ingrese su edad porfavor"));

if(((genero == "mujer")&&(edad>=60))||((genero == "hombre")&&(edad>=65))){
    alert("Usted puede jubilarse");
}
else{
    alert("Disculpe, no puede jubilarse")
}

