// Let's play! You have to return 
//which player won! In case of a draw return Draw!

const rps = (p1, p2) => {
  
    if (p1 === p2) {
      return "Draw!";
      
    } else if (
      (p1 === "scissors" && p2 === "paper") ||
      (p1 === "rock" && p2 === "scissors") ||
      (p1 === "paper" && p2 === "rock")
    ) {
      return "Player 1 won!";
    } else {
      return "Player 2 won!";
    }
}

const Rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };

// This kata is about multiplying a given number 
// by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // your code........
  return number % 2 === 0 ? number * 8 : number * 9
}


// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

function otherAngle(a, b) {
    return 180 - (a + b)
  }

  function otherAngle(a, b) {
    if(a<0 || b<0) //ensure no negative angles
      return 0;
    if((a+b)>=180) //ensure 2 angles don't sum up to 180
      return 0;
    return 180 - a - b; //return missing angle
  }

// Retornar o número de uma string em forma de interio. 
// O número está sempre no início da frase

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      const age = inputString.split(' ')
      return parseInt(age[0])
    }

    function getAge(inputString){
        return parseInt(inputString[0]); 
      }

// Encontrar a próxima raiza perfeita de um número
// Recebe um número de for raíz perfeita retorna a próxima 
// Se não for retorna -1 

function findNextSquare(sq) {
    // Encontra a raíz quadrada do númer (ex: 25 raíz = 5 )
    const findSqrt = Math.sqrt(sq);
    // Verifica se a raíz é um número inteiro Caso seja inter é por que é uma raíz 
    if (Number.isInteger(findSqrt)) {
        // O próximo quadrado perfeito é a raíz quadrada do antecedente somado 1
      const nextSqrt = findSqrt + 1;
      // calcula o próximo quadrado perfeito
      return nextSqrt * nextSqrt;
    } else {
      return -1;
    }
  }
  