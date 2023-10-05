// The goal of this exercise is to convert a string to a new string 
// where each character in the new string is "(" if that character 
// appears only once in the original string, or ")" if that character 
// appears more than once in the original string. Ignore capitalization 
// when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"

function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }

//   Timmy & Sarah think they are in love, but around where they live,
//    they will only know once they pick a flower each. If one of the 
//    flowers has an even number of petals and the other has an odd number
//     of petals it means they are in love.

// Write a function that will take the number of petals of each flower and
//  return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
  const flowerOne = flower1 % 2 === 0 ? "Even" : "Odd"
  const flowerTwo = flower2 % 2 === 0 ? "Even" : "Odd"
  
  return flowerOne !== flowerTwo
}

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 === 1
}

// Write a function to split a string and convert it into an array of words.

function stringToArray(string){

	// code code code
return string.split(" ")
}

// You were camping with your friends far 
// away from home, but when it's time to go
//  back, you realize that your fuel is running 
//  out and the nearest pump is 50 miles away! 
//  You know that on average, your car runs on about 
//  25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that
//  tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return distanceToPump <= (mpg * fuelLeft)
};


// Verificar se um array é igual ao quadrado do outro array

function comp(array1, array2){
  //your code here
   if (array1 === null || array2 === null) {
    return false;
  }
  
  array1.sort((a,b) => a - b)
  array2.sort((a,b) => a - b)
              
  const newArr = array1.map((num) => (num * num))
  
  return JSON.stringify(array2) === JSON.stringify(newArr);
}

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}