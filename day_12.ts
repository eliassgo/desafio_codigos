// Constar o número de vogais de uma string
export class Kata {
    static getCount(str: string): number {
      // Input: Uma string ex: elias 
      // Processamento: 
      // 1. Dividir separar a string e colocar em um array 
      // 2. Fazer uma comparação de cada elemento do array com as vogais 
      // 3. adicionar 1 a cada vez que aparecer uma vogal em uma constante 
    
    const strArr = str.split('');
    
    var numberVogais = 0; 
    
    for(var i = 0; i <= strArr.length; i++){
        if(strArr[i] == 'a' || strArr[i] == 'e' || strArr[i] == 'i' || strArr[i] == 'o' || strArr[i] == 'u'){
        numberVogais += 1; 
        } 
    }
    
    return numberVogais; 
    }
}
// Option 2
export class Kata2 {
    static getCount(str: string) {
      let list = str.match(/[aeiou]/gi);
      return list ? list.length : 0;
    }
  }

// Verificar se a quantidade de "x" e "o" de uma função é igual
// Também fazer a verificação para caso eles sejam ambos zero e retornar true tbm 

export function xo(str: string) : boolean {
    // your code here
    // Input: uma string
    // Processamento: Verificar se a quantidade de 'x' e 'o' são o mesmo 
    // 1. Colocar em uma string apenas os 'x' da string 
    // 2. Colocar em uma string apenas os 'o' da string
    // retornar a relação de igualdade da quantidade de ambos 

    // Usei || [] para garantir que, caso não haja correspondências, 
    //o resultado seja um array vazio em vez de null, evitando erros.

    let numberOfO = (str.match(/[o]/gi) || []).length;
    let numberOfX = (str.match(/[x]/gi) || []).length;
    
    return numberOfO === numberOfX;
  }

  // Verificar se é possível construir um triângulo com o três números dados

  export function isTriangle(a: number, b: number, c: number): boolean {
  
    if(a < 0 || b < 0 || c < 0){
      return false 
    }
    
    return a + b > c && b + c > a && c + a > b ? true : false;
  }

// accum("abcd") -> "A-Bb-Ccc-Dddd"
  export function accum(s: string): string {
    return s.split('')
    .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
    .join('-');
  }