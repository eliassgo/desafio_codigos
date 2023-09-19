// Função para somar os número de um array sem o maior e o menor número
function sumArray(array) {
    // Verifica se o array é um array, and se o array é maior que zero, and se os elementos do array são números
    if (Array.isArray(array) && array.length > 0 && array.every(item => !isNaN(item))){
     // Ordena os número do menor número para o maior
    array.sort((a, b) => a - b);
     // Remove o último elemento do array
    array.pop();
     // Remove o primeiro elemento do array
    array.shift();
     // Retorna a soma do array
    return array.reduce((a, b) => a + b, 0);
    } else {
    return 0
  }
}

// Opção 02: 
function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}


// Tornando um Número negativo: 
function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num > 0 ? -num : num;
}

// Captando o menor número: 
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

// Verificando Médias:
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}

// Recebendo um número e transformando ele no inverso

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function digitize(n) {
  //code here
  // Converte o número em uma string
  const numbers = n.toString();

  // Divide a string em um array de caracteres
  const charArray = numbers.split('');

  // Inverte a ordem dos caracteres no array
  const reversedArray = charArray.reverse();

  // Converte os caracteres de volta para números
  const digitArray = reversedArray.map((char) => parseInt(char));

  return digitArray;
}

// Ordenando um array de números do menor para o maior e depois retornando o menor número. 
// Opção 01 
class SmallestIntegerFinder {
  findSmallestInt(args) {
    var sortNumber = args.sort((a,b) => {return a - b})
    return sortNumber[0]
  }
}

// Opção 02
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}

// Número para string 

function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}


// Somando apenas os números positivos
function positiveSum (arr) { 
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
  }
  
  function positiveSum(arr) {
    var positiveNumbers = arr.map((n) => { return n >= 0 ? n: 0})
    return positiveNumbers.reduce((a,b) => a + b , 0 )
  }
  

// Sum Numbers
function sum (numbers) {
  "use strict";
return numbers.reduce((a, b) => a + b, 0);
};

function positiveSum(arr) {
 return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// Abreviando o nome e retornando apenas as inicias
function abbrevName(name){
  // Começa separando em dois elementos de arrays o nome e o sobrenome. Como o nome e o spbre estão seprados por espaços, o método split(“ “) separa em dois elementos o elemento que está separado por vírgula.
    var nameArray = name.split(" ");
  // Aqui pega a primeira letra do elemento[0], e a primeira letra do elemento[1], e junta com um ponto. 
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }
  
