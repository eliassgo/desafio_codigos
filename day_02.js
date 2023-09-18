// Retornando um array em que a soma dos elementos positivos é o
// primeiro elemento e a soma dos elementos negativos é o segundo elemento

// Minha forma de fazer
function countPositivesSumNegatives(input) {
    // your code here
    if(!Array.isArray(input) || input.length === 0 || !input.every(item => !isNaN(item))){
      return [];
    }
    
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    
      input.forEach(item => {
        if(item > 0){
          positiveNumbers++;
        } else {
          negativeNumbers += item;
        }
        });
    
    return [positiveNumbers, negativeNumbers]
  }

// Outra forma 

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}


// Tranfromando string em Upper Case

function makeUpperCase(str) {
    // Code here
    
    return str.toUpperCase()
  }

  const makeUpperCase = str => str.toUpperCase();

  // Arredondando um número para o maior inteiro menor ou igual ao número original 
  // Math.floor(4.9) retornará 4, e Math.floor(-3.1) retornará -4.

  function litres(time) {
    var result = Math.floor(time * 0.5)
    
    return result;
  }

  //Math.round(): Esta função arredonda um número para o inteiro mais próximo.
  // Math.round(4.4) retornará 4, e Math.round(4.5) retornará 5.

  
  function litres(time) {
    var result = Math.rounded(time * 0.5)
    
    return result;
  }


// Calculando o número de pessoas que tem no ônibus na última parada

var number = function(busStops) {
  // Good Luck!
  
  // Use o método reduce para somar as pessoas que entram e subtrair as que saem em cada parada
  var totalPeople = busStops.reduce(function(sum, currentStop) {
    var peopleEntering = currentStop[0];
    var peopleLeaving = currentStop[1];
    
    // Somar as pessoas que entram e subtrair as que saem
    return sum + peopleEntering - peopleLeaving;
  }, 0); // Inicialize a soma com 0
  
  return totalPeople;
}

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

// Encontrando com o indexof 

function findNeedle(haystack) {
  // your code here
  
  var foundedNeedle = haystack.indexOf("needle")
  
  return `found the needle at position ${foundedNeedle}`
}

function findNeedle(haystack) {
  // your code here
  const needleIndex = `found the needle at position ${haystack.indexOf("needle")}`
  
  return needleIndex
}


// Usando o looping for
// Interando n vezes o str s
function repeatStr (n, s) {
  let str = ''
  
  for (let i = 0; i < n; i++){
    str += s;
  }
  
  return str;
}

function repeatStr (n, s) {
  var str="";
  for(var i=0; i < n; i++)
    str+=s;
    return str;
  }