// Remover os espaços vazios de uma string 

function noSpace(x){
    return x.replace(/\s+/g, '')
  }

  function noSpace(x){return x.split(' ').join('')}

  // INVERTER UMA STRING
  function solution(str){
    // Separar cada letra da string por espaços = split('')
    // Inverte a ordem do array = reverse
    // Retirar os espaços do array = join('')
    let letters = str.split('')
    letters.reverse()
    return letters.join('')
  }

// VERIFICAR SE UM NÚMERO É PAR OU ÍMPAR
  function evenOrOdd(number) {
    return number % 2 === 0  ? "Even" : "Odd"
  }

  function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }


// Somar de um array

// Sum Numbers
function sum (numbers) {
    "use strict";
  // Verificar se é um array e se está vazio
    if (!Array.isArray(numbers) || numbers.length <= 0){
      return 0
    }
  
  // Retornar a soma
    return numbers.reduce((a,b) => a + b, 0)
};

// Soma de números positivos

function positiveSum(arr) {
    let soma = 0
   arr.forEach((num) => { num > 0 ? soma+= num : soma+=0})
  
  return soma 
}

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }
 

 function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

// TORNANDO UM NÚMERO NEGATIVO

function makeNegative(num) {
    // Code?
    return num > 0 ? num * -1 : num; 
  }

  function makeNegative(num) {
    return -Math.abs(num);
  }

// CAPTANDO O MENOR NÚMERO DE UM ARRAY
// 01
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b) => a - b)
      return args[0]
    }
  }
// 02
  class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }


// Verificando notas

function getGrade (s1, s2, s3) {
    // Code here
    let avar = (s1 + s2 + s3) / 3
    
    return avar >= 90 ? 'A' : avar >= 80 ? 'B' : avar >= 70 ? 'C' : avar >= 60 ? 'D' : 'F'
  }

  function getGrade(...scores) {
    let average = scores.reduce((a, b) => a + b) / scores.length
    
    if (average >= 90) return 'A'
    else if (average >= 80) return 'B'
    else if (average >= 70) return 'C'
    else if (average >= 60) return 'D'
    else return 'F'
  }


// TRANSFORMANDO UM NÚMERO EM ARRAY REVERSO 

// digitalize(123456)
function digitize(n) {
    //code here
    return n.toString().split('').map(Number).reverse()
// n.toString = "123456"
// n.split('') = ["1", "2", "3", "4", "5", "6"]
// n.map(number) = [1, 2, 3, 4, 5, 6]
// n.reverse() = [6, 5, 4, 3, 2, 1].
  }

  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }