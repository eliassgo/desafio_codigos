// Remover the first and the last characters of a string 
export function removeChar(str: string): string {
    return str.slice(1,-1);
  }
  
//  Diferença do cubo de dois arrays
export function findDifference(a: [number, number, number], b: [number, number, number]): number{
    return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y))
}

// Cáculo do século. 
export const centuryFromYear = (year: number): number => {
    return Math.ceil(year/100);
};

// Dado um número, calcular a soma cumulativa desse número
// Ex: 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

export const summation = (num:number)=> { 
    var total = 0;

    for(var i = 0; i <= num; i++){
      total += i
    }

    return total
  }

  export const summation2 = (num:number) => num * (num + 1) / 2;

// Oposto de um dado número 
export class Kata {
    static opposite(n: number) {
      return -n;
    }
  }

// Dado um array de inteiros, strings ou número, retornar a soma do array

    export function sumMix(x: any[]): number {
        return x.reduce((a, b) => a + Number(b), 0 )
    }

  export function sumMix2(xs: (string | number)[]): number {
    return xs.reduce<number>((a, x) => a + +x, 0);
  }

// Calcular se a quantidade de passageiros que estão esperando cabe no ônibus 
// Se couber retorna 0, se não couber retorna a quantidade que não cabe 

    export function enough(cap: number, on: number, wait: number): number {
    // your code here
    // ENTRADA:
    // cap: total de assentos
    // on: total de pessoas dentro 
    // wait: pessoas para entrar
    // PROCESSAMENTO: 
    // resultado de: cap - (on + wait)
    // se resultado > 0 = exibir resultado senão exibir 0 
    
    return  on + wait <= cap ? 0 : on + wait - cap 
  }

  export function enough2(cap: number, on: number, wait: number): number {
    return ( on + wait > cap) ? on + wait - cap : 0
  }

// Verificar se o primerio e o último elemento de uma string é igual ao de outro string

export function feast(beast:string, dish:string):boolean {
    // Your Code
    // ENTRADA: Uma string, contendo espaços ou não 
    // PROCESSAMENTO: 
    // 1* Separar a string entre espaços
    // 2* Separar entre string de não espaços
    // 3* com o array de beast and dish, comparar de o elemento da posição [0] é igual o da posição [0]
    // e se o da última posição é igual o da última posição 
    
    const beastArr = beast.replace(/\s+/g, '').split('');
    const dishArr = dish.replace(/\s+/g, '').split('');
  
    return beastArr[0] === dishArr[0] && beastArr[beastArr.length - 1] === dishArr[dishArr.length - 1]
  }

  export function feast2(beast:string, dish:string):boolean {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
  }

// Soma de goals 

export function goals(...args: number[]) {
    return args.reduce((a, b) => a + b);
  }

  export function greet(name: string, owner: string): string{
    return `Hello ${name === owner ? 'boss': 'guest'}`;
  }


// Dado um número e um limte, verificar todos os múltiplo do número dentro do limite
// EX: findMultiples(5, 25) = [5, 10, 15, 20, 25]);

export function findMultiples(integer: number, limit: number): number[] {
    
    var multiplesArr: number[] = []
    
    for (var i = integer; i <= limit; i++){
        if (i % integer === 0 ){
          multiplesArr.push(i)
        }
    }
    
    return multiplesArr
  }