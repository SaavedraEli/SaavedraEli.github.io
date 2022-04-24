// variable

//estructura de iteraccion
let alumnos = ['Alan', 'Alejandro', 'Daiana', 'Daniel'];

// hay 4 elementos
//alan >0
//alejandro >1
//daiana >2
//daniel >3
// hay 4

let tamanio = alumnos.length;
/*alert(tamanio);*/
console.log(tamanio);

// recorrer el array de nombres y mostrar cada uno
/* let valor =0;
valor = valor + 1;
valor++;
*/
for(let i= 0;i < tamanio;i++) { 
   console.log(i, alumnos[i], typeof alumnos[i]);
}
 //foreach
 for (let nombre of alumnos) {
     console.log(nombre);
 }

 //while
 console.log('While 1');
 let i= 0;
while(alumnos [i] !=='Daiana'){
   console.log(i, alumnos[i]);
   i++;//debemos incrementar el indice que usamos para recorrer el vector
}

console.log('While 2');
i= 0;// resset del indice
while( i< tamanio) {
    if(alumnos[i] ==='Daiana'){
 console.log(i,'Daiana');
 break; //sale del ciclo while
 }
 i++;
}
///objetos
let alumnosObj = [
{
    edad:25
    nombre:'jose'
}
{
    edad:24
    nombre:'martin'
}
{
    edad:35
    nombre:'maria'
}
];
// recorrer objeto 
//for/while do=while
//como detecto el menor de los alumnos?
const primero = true;
let alumnoMasChico; //aca va a quedar el alumno mas chico
for(const alumnoObj of alumnosObj) {
    if(primero){
        alumnoMasChico = alumnosObj;
        primero = false;
    }
    //si alumno mas chico que el alumnoOBJ, entonces pasa a ser el nuevo menor
    
}