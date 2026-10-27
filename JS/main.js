//Ejercicio 1: Verificar si un número es positivo, negativo o cero//
function verificarNumero(num) {
    if (num > 0) {
        return "el numero es positivo";
    } else if (num < 0) {
        return "el numero es positivo";
    } else {
        return "el numero es igual a 0";
    }
}
console.log(verificarNumero(10));

// Ejercicio 2: Edad legal para votar//

function puedeVotar(edad) {
    if (edad >= 18) {
        return "Puede votar";
    } else {
        return "No puede votar";
    }
}
console.log(puedeVotar(4));

//Ejercicio 3: Mayor de dos números//

function mayorDeDos(a, b) {
    if (a > b) {
        return `${a} es el mayor`;
    } else if (a < b) {
        return `${a} es el mayor`;
    } else if (a === b) {
        return "los numeros son iguales";
    }
}
console.log(mayorDeDos(10, 10));

//Ejercicio 4: Determinar si un número es divisible por 5//

function esDivisiblePorCinco(num) {
    if (num % 5 === 0) return true;
    else {
        return false;
    }
}
console.log(esDivisiblePorCinco(17));

//Ejercicio 5: Clasificar nota de examen//

function clasificarNota(nota) {
    if (nota >= 90) {
        return "Excelente";
    } else if (nota >= 70 && nota < 90) {
        return "buena";
    } else if (nota >= 50 && nota < 70) {
        return "regular";
    } else {
        return "insufieciente";
    }
}
console.log(clasificarNota(60))
