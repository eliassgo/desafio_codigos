
// ELEVAR OS NÚMERO AO QUADRADO E RETORNAR A JUNÇÃO 
function squareDigits(num){
    // Recebe um número inteiro
    // Transfomar em string
    // Separa cada número da string em um array 
    // Eleva ao quadrado cada número 
    // Retorna a concatenação dos números elevados ao quadrado 
    // Retorna um número inteiro 
    
    var numStr = num.toString().split('').map((num) => {return num**2}).join('')
    return Number(numStr);

}

function squareDigits(num){
    // ('' + num) => transforma um número em uma string => adicionar uma string vazia faz ele uma string
    // .split("") => Separa os números e trasnforma em um array de strings
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }


// VERIFICAÇÃO SE A MINHA NOTA É MAIOR QUE A MÉDIA DA TURMA

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }

// VERIFICAR SE ESTÁ INCLUÍDO NO ARRAY 

function check(a, x) {
    // your code here
    // Percorrer o array a e verificar se tem algo igual a x
    // Retornar true se tiver e retornar false se não tiver
    return a.includes(x)
  }

  const check = (a,x) => a.includes(x);


// Substituindo cada número de acordo com uma condição

function fakeBin(x){
    // receber str de dígitos
    // Substituir os números abaixo de 5 por 0
    // substituir os números acima de 5 por 1 
    // Retornar a str
      const xArr = x.split("")
      const xReplaced = xArr.map((digit) => {
        return digit < 5 ? 0 : 1; 
      })
      return xReplaced.join("")
    }

    function fakeBin(x) {
        return x.split('').map(n => n < 5 ? 0 : 1).join('');
    }

    function fakeBin(x) {
        return x.replace(/\d/g, d => d < 5 ? 0 : 1);
      }