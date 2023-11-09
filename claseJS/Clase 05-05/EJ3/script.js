/*let num //= parseInt(prompt("Ingrese su numero"));

let triplicador = num => num*3;

//alert(`El triple de su numero ingresado es ${triplicador(num)}`);

let num1 //= parseInt(prompt("Ingrese su primer numero"));
let num2 //= parseInt(prompt("Ingrese su segundo numero"));

let multiplicador = (num1,num2) => num1*num2;

//alert(`El producto de sus numeros ingresados es ${multiplicador(num1,num2)}`); 

let num3 //= parseInt(prompt("Ingrese su primer numero"));
let num4 //= parseInt(prompt("Ingrese su segundo numero"));

let division = (num3,num4) => num3/num4;

//alert(`La division de sus numeros ingresados es ${division(num3,num4)}`);

let num5 //= parseInt(prompt("Ingrese su primer numero"));
let num6 //= parseInt(prompt("Ingrese su segundo numero"));

let resto = (num5,num6) => num5%num6;

//alert(`El resultado del módulo es ${resto(num5,num6)}`);

const numeroTriplicado = triplicador(5);
const producto = multiplicador(numeroTriplicado, 12);
const resultadoDivision = division(producto, 12);
const restoDivision = resto(resultadoDivision, 3);

alert(restoDivision);*/



let contarDeA_n = (contar_de_a,contar_hasta) =>{

    for(let num=1;num<=contar_hasta;num+=contar_de_a){
        console.log(num);
    }
}

contarDeA_n(2,10);