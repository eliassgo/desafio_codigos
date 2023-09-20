// FUNÇÃO PARA INVERTER AS LETRAS DAS PALAVRAS DE UMA FRASE

// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // str.split(' ') = Separa as palavras da frase, ex: 'Olá Elias" ==> "Olá", "Elias"
    // .map(function(word)) => Executa uma função para cada palavra que foi separada com split
    // word.split = Separa cada letra da palavra, ex: "Olá" ==> "O", "l", "á"
    // .reverse() = Inverte as letras de cada palavra, ex: "á", "l", "O"
    // join('') = Junta as letras das palavras sem espaço
    // join(' ') = Junta cada palavra invertida com o espaço que era antes
    return str.split(' ').map(function(word){ 
      return word.split('').reverse().join('');
    }).join(' ');
  }

// Return a new array with the strings filtered out
  function filter_list(l) {
    // Return a new array with the strings filtered out
    
    return l.filter((item) => { return typeof item === 'number'})
  }


// TRANSFORMANDO STRING EM NÚMERO

const stringToNumber = function(str){
    // put your code here
    return parseInt(str, 10); 
  }

  var stringToNumbe = function(str){
    return parseInt(str);
  }


// Retornando o maior e o menor número de uma string

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }


function highAndLow(numbers){
    // Transformar os números em um array de números
    var numbersArr = numbers.split(' ').map(Number); 
    
    // Encontrar o menor e o maior número
    var smallestNumber = Math.min(...numbersArr)

    var highestNumber = Math.max(...numbersArr)
  
    return highestNumber + ' ' + smallestNumber; 
  }

// RETORNAR A SOMA DOS NÚMEROS POSITIVOS 

function positiveSum(arr) {
    return arr.filter((num) => {return num > 0}).reduce((a,b) => a + b, 0)
  }