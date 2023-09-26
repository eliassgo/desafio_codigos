// Verificar os primeioros n múltiplos de x 

function countBy(x, n) {
    // Recebe dois números inteiros, maior que zero
    // Verificar os primeiros n números múltiplos de x 
    let z = []
    for (var i = 1; i <= n; i++) {
      z.push(x * i)
    }
    return z;
}


// Make a function that will return a greeting statement that uses an input; your program should return,
function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }


// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    // your code
    // Receber duas strings 
    // Juntar essas duas strings 
    // retirar as letras repetidas 
    // ordenar a nova string 
    
    const newArr = s1.split('').concat(s2.split(''))

    const removedArr = Array.from(new Set(newArr))

    return removedArr.sort().join('')
  }

  function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }


// Retornar a multiplicação dos números de um array

function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }

// Tranformar uma string em um número 

const stringToNumber = function(str){
    // put your code here
    return Number(str);
  }


// Total de pessoas no ônibus após a última parada 

function number(busStops) {
    return busStops.reduce((total, [getOn, getOff]) => total + getOn - getOff, 0);
  }

// Given a string of digits, you should replace any digit below 5 with '0' and 
// any digit 5 and above with '1'. Return the resulting string.

  function fakeBin(x){
    // Recebe uma string de números 
    // Separa a string em um array de númbers 
    // Substitui cada número mior que 5 por 1 e menor por 0 
    // retorna uma string de números 
      
      const numArr = x.split('').map((num) => num < 5 ? 0 : 1 )
      return numArr.join('')
    }