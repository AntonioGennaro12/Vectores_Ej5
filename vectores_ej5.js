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

// Parte 2: Se incrementa en "1" a todos los elementos del Array (vector)

const NUM_A_SUMAR   = 1;
for (let cont=0; cont < numeros.length;cont++) {
    numeros[cont] += NUM_A_SUMAR;
}
console.log(numeros);

// Parte 3: Se duplican todos los elementos del Array (vector)
const NUM_A_MULTIP   = 2;
for (let cont=0; cont < numeros.length;cont++) {
    numeros[cont] *= NUM_A_MULTIP;
}
console.log(numeros);

// Parte 4: Se duplican los elementos (solo cada 2) es decir el 1, 3, 5, etc
// vae la misma constante de la parte 3
for (let cont=1; cont < numeros.length;cont+=2) {
    numeros[cont] *= NUM_A_MULTIP;
}
console.log(numeros);
