// Números de divisores de um número inteiro 
export function divisors(n: number) {
    // your code here
    // Input: Um número positivo 
    // Processamento: 
    // Verificar a quantidade de divisores de um número 
    // Output: Número inteiro 
    
    let accum = 0; 
    
    for(var i = 1; i <= n; i++){
      if(n % i == 0){
        accum += 1; 
      }
    }
    
    return accum; 
  }

  // Enumerar as linhas de cada elemento de um array
  // Ex: ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

  export function number(array: string[]): string[]{
    //Input: Um array de strings 
    //Processamento: Colocar em cada elemento do array o número da sua posição 
    //Output: Array
      
    return array.map((str, index) => `${index + 1}: ${str}` );
  }

  //Repetir duas vezes cada char de uma dada string
  //Ex: * "Hello World" -> "HHeelllloo  WWoorrlldd"

  export function doubleChar(str: string): string{
    // Your code here
    // Input: Uma string
    // Processamento: Repetir duas vezes cada letra da string 
    // Output: Uma string 
    
    const arrayStr = str.split('').map((el) => el.repeat(2)); 
    
    return arrayStr.join('');
  }

// Verificar se uma string é toda maiúscula 

export function isUpperCase(str: string) {
    // your code here
    // Input: uma string
    // Processamento: Verificar se todos os elementos de uma string são maiúculos 
    // Input: Boolean 
    
    return str === str.toUpperCase(); 
  }