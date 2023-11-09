let num = 1;
while(true){
    num = parseInt(prompt("Ingrese su numero"));
    if (num <= 0) {
        break; 
    }
    else if(num%2==0){
        alert("Su numero es par");
    }
    else{
        alert("Su numero es impar");
    }
    alert("Programa finalizado");
}