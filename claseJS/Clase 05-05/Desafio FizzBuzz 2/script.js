   /* let contar_hasta = parseInt(prompt(`Ingrese hasta que numero quiere contar`))
    let fizz_num = parseInt(prompt(`Ingrese el primer multiplo`))
    let buzz_num = parseInt(prompt(`Ingrese el segundo multiplo`))

    let fizzbuzz2 = (palabra1,palabra2,fizz_num,buzz_num,contar_hasta) => {
        
        let frase="";   
        
        for(let num=1;num<=contar_hasta;num++){
            if(num%fizz_num==0){
                if(frase!==""){
                    frase+=",";
                }
                frase+=palabra1;
            }
            else if(num%buzz_num==0){
                if(frase!==""){
                    frase+=",";
                }
                frase+=palabra2;            
            }
            else{
                if(frase!==""){
                    frase+=",";
                }
                frase+=num;
            }
        }

        console.log(frase);

    }

fizzbuzz2('hola','chau',fizz_num,buzz_num,contar_hasta);


let amigos = ["Juan","Pepe","Jorge","Francisco"];
amigos[0] 
amigos[1]  
console.log(amigos.length) 
console.log(amigos[amigos.length])
amigos[amigos.length-1]

let listaDelSuper = ["pan","mermelada","queso","mortadela","zapallo"]
listaDelSuper[0]
let ultimoElemento= [listaDelSuper[4]];
console.log(ultimoElemento)

let colores = ["marron","violeta"];
;
console.log(colores.push("amarillo"))

let amigos=["juan","pedro","nacho","juan","pedro"]

if(amigos.indexOf("Felix")== -1){
    alert("Sería bueno tener un amigo que se llame Félix")
}
else{
    alert("Tengo un amigo que se llama Félix")
}

let nombre= prompt("Ingrese un nombre (para dejar de agregar, simplemente presione 0)");
amigos = [];


while(nombre!=0){
    amigos.push(nombre);
}


let verificacion = (nombre) =>{
    if(amigos.indexOf(nombre)==-1){
        alert("No tenes un amigo con ese nombre")
    }
    else{
        alert("Tenes un amigo con ese nombre")
    }
}




let numbers =[3,5,99,10]

let doble = numbers.map(numero => numero*2);

console.log(numbers);
console.log(doble);



let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

let frase2 = frases.map(frase => {
    return "!" + frase + "!";
})

console.log(frase2);

let numbers = [6, 1, 34, 94, 3, 17];

let multiplicacion = numbers.reduce((acumulador,numero) =>{

    return acumulador*numero;

},0)

console.log(multiplicacion);

let numbers = [5, 4, 1, 9, 2];

let maximo = numbers.reduce((max,numero) =>{

    if (numero > max) {
        return numero;
      } else {
        return max;
      }
    

})

console.log(maximo);*/

let listaDelSuper = ["queso","mortadela","zapallo"];
listaDelSuper.push("salame","galletitas");
listaDelSuper.unshift("pan","mermelada");

let noHabia= listaDelSuper.pop();

let comprado= listaDelSuper.shift();

let numeros=[1,2,5,6,3,6];

let logitems = (array) =>{
    array.forEach((item) => {
        console.log(item);
      });
}

console.log(logitems(listaDelSuper));
console.log(logitems(numeros));


