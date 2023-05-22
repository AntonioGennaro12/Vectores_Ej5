//Defino un Array de 1 elmento del tipo "número". 
const   numeros = [2];

// con "push" agrego 29 elementos más
const AGREGA_MAX = 29;
// Hago un bucle for para agregar 29 elementos y completar 
// 30 números pares de 2 a 60...
for(let cont=0; cont < AGREGA_MAX; cont++) {
    numeros.push((cont+2)*2);
}

console.log(numeros);
