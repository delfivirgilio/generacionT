/* function persona(usuario,edad,direccion,fechaDeNacimiento,contraseña){
    this.usuario = usuario;
    this.edad = edad;
    this.direccion = direccion;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.contraseña = contraseña;
}

const usuario1 = new persona ("Delfina",23,"Calle 123","23-10-2004","contraseña123"); */

//EJ2
/* let propertyKey = "modelo";
let anotherPropertyKey = "precio";
let nextProperty;
let miAuto={
    marca : "honda",
    año : 2009,
    nuevo : false,
    propertyKey,
    nextProperty : "verde"
}

for(const propiedad in miAuto){

    console.log(miAuto[propiedad]);

} */

//EJ3

/* class estudiante{
    constructor(nombre,nota){
        this.nombre = nombre;
        this.nota = nota;
    }

    subirNota(){
        if(this.nota >= 5){
            this.nota+= 2;
            if(this.nota >= 10){
                this.nota = 10;
            }
        }
    }
}

const estudiante1 = new estudiante ("edgar", 4);
const estudiante2 = new estudiante ("delfina", 9);
const estudiante3 = new estudiante ("victoria", 6);

estudiante1.subirNota();
estudiante2.subirNota();
estudiante3.subirNota();


console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3); */

//EJ4

/* class peliculas {
    constructor(titulo, rating, loHasVisto) {
        this.titulo = titulo;
        this.rating = rating;
        this.loHasVisto = loHasVisto;
    }
}

const pelicula1 = new peliculas("Alicia",4,true);
const pelicula2 = new peliculas("Totoro",5,true);
const pelicula3 = new peliculas("Cars",3,false);
const pelicula4 = new peliculas("Transformers",2,false);

const arregloPeliculas=[pelicula1, pelicula2, pelicula3, pelicula4];

for(let i=0; i<=arregloPeliculas.length;i++){
    let pelicula= arregloPeliculas[i];
    let texto;
    if (pelicula.loHasVisto) {
        texto = "Viste";
    } else {
        texto = "No viste";
    }

    console.log(`${texto} ${pelicula.titulo} - ${pelicula.rating} estrellas`)
   
} */

//EJ5

// let numeros = [2, 4, 5, 37, 0];

// for(let i=0; i<=numeros.length;i++){
//     console.log(numeros[i]);
// }

// let numeros_duplicados = {}





