// Retornar a soma dos dois menores números de um array 

function sumTwoSmallestNumbers(numbers) {  
    //Code here
    numbers.sort((a,b) => a - b, 0)
    return numbers[0] + numbers[1]
  }


  // Retornar o maior e o menor número de um array em outro array 
  function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }