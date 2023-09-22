// Ejercicio 1 
const getInfoUser = () => {
    let name = prompt("Ingresa tu nombre");
    let age = prompt("Ingresa tu edad");
    let movies = prompt("Ingresa peliculas separadas por comas [,]");
    let movieslist = movies.split(",");
    console.log(`Hola ${name}, tienes ${age} años.\n`);
    for(let i=0;i<movieslist.length;i++){
        console.log(`La peli que te gusta la pelicula ${movieslist[i]}.`);
    }
}

// Ejercicio 2 
const numeroMasGrande = () =>{
    let numeros = prompt("Ingresa numeros separados por comas [,]");
    let listanumeros = numeros.split(",");
    console.log(listanumeros);
    let elMasGrande = listanumeros[0];
    for(let i = 0;i<listanumeros.length;i++){
        if(parseInt(listanumeros[i])>parseInt(elMasGrande)){
            elMasGrande = listanumeros[i]
        }
    }
    console.log(`El mas grande es ${elMasGrande}`);
}

// Ejercicio 3 
const alarm = () => {
    let segundos = prompt("Ingresa los segundos para la alarma");
    setTimeout(() => mensajeAlarma(segundos), parseInt(segundos)*1000);
} 

const mensajeAlarma = (segundos) => {
    console.log("Despierta ya pasaron "+String(segundos)+" segundos"); 
}
// Ejercicio 4
const esPalindromo = () =>{
    let palabra = String(prompt("Ingresa una palabra"));
    palabra = palabra.toLowerCase();
    palabra = palabra.replace(/ /g,'');
    let listaDeLetras = palabra.split("");
    listaDeLetras = listaDeLetras.reverse();
    let palabraAlReves = listaDeLetras.join("");
    console.log(palabra);
    console.log(palabraAlReves);
    if(palabra==palabraAlReves){
        console.log("Es un palindromo");
    }
    else{
        console.log("No es un palindromo");
    }
}
// Ejercicio 5
const factorial = (number) =>{
    if(number==0){
        return 1;
    }
    return number * factorial(number-1);
}
// Flat array
let multiDim = [1, [2, 3, [4, 5, [6]]]];
let oneDArray = []
const aplanar = (matriz,lista1d) => {
    // let termine = false;
    let iterador = 0;
    revisar(matriz,lista1d,iterador);
}

const revisar = (listaDearriba,listafinal,index) =>{
    // console.log("Index: "+index);
    // console.log("Que tipo soy: "+typeof(listaDearriba[index]));
    // console.log("Yo soy:");
    // console.log(listaDearriba[index]);
    // if(!Array.isArray(listaDearriba[index])){
    if(typeof(listaDearriba[index])=== "number"){
        listafinal.push(listaDearriba[index]);
        console.log(listafinal);
        if(index<(listaDearriba.length-1)){
            // console.log("Rec1");
            revisar(listaDearriba,listafinal,index+1);   
        }
    }
    if(typeof(listaDearriba[index])==="object"){
        // console.log("Rec2");
        revisar(listaDearriba[index],listafinal,0);
    }
}