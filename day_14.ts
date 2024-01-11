// Receber uma string com a cor atual do sinal e retornar a próxima cor d=q vai aparecer

export function updateLight(current: string): string {
    switch(current) {
        case "green": return "yellow";
        case "yellow": return "red";
        case "red": return "green";
    }
    
    return "";
  }

  const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
};

export const updateLight2 = (current: string): string => {
    return lights[current];
};

// Receber um número, criar um array do tamanho do número e colocar na ordem descendente

export const reverseSeq = (n: number): number[] => {
  
    let newArr = []; 
    
    for(var i = 1; i <= n; i++){
      newArr.push(i); 
    }
  
    return newArr.reverse();
  };

// Receber um número e retornar a contagem de carnerinhos do valor do número
// Ex: num === 3. Return "1 sheep...2 sheep...3 sheep..."

export function countSheep(num: number): string {
    let sheepArr = []; 
    
    if(num === 0){
      return ''
    }
    
    for(var i = 1; i <= num; i++){
      sheepArr.push(i + " sheep...")
    }
    
    return sheepArr.join(''); 
  }

  export function countSheep2(num: number): string {
    let out = '';
    for (let i = 1; i <= num; i++) {
      out += `${i} sheep...`;
    }
    return out;
  }

// Verificar se uma plavara é um isogram, ou seja, todas as letras são diferentes. 

export function isIsogram(str: string): boolean{
    const strArr = str.toLowerCase().split(''); 
    
    for(let i = 0; i < strArr.length; i++){
       if(strArr.every((s, index) => s !== strArr[i] || index === i)){
         continue; 
       }else{
         return false; 
       }
    }
    
    return true;
  }


  export function isIsogram2(str: string){
    //resolve str to lowercase first
    str = str.toLowerCase();
    //transform string to a Set to remove duplicates and 
    //compare the size of the set to the length of the str
    return new Set(str.split('')).size === str.length;
  }

  export function isIsogram3 (str: string): boolean {
    return (new Set(str.toLowerCase())).size === str.length;
  }

  // Example
  // Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

  export function pipeFix(numbers: number[]): number[]{
    let result: number[] = [];
    for (let i = numbers[0]; i <= numbers[numbers.length -1]; i++) {
      result.push(i);
    }
    return result;
  }

  // ('+', 4, 7) --> 11
  const ops = {
    "+": (l, r) => l + r,
    "-": (l, r) => l - r,
    "*": (l, r) => l * r,
    "/": (l, r) => l / r,
  }
  export const basicOp = (operation: keyof typeof ops, value1: number, value2: number): number => (
    ops[operation](value1, value2)
  )