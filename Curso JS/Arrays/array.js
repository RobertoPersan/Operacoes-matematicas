/*let arr = [1, 5, 3, 8, 6];
let nomes = ["Roberto", "Persan", "Beto"];
let bool = [true, false, true, false];

let misturado = [5, 'Roberto', true];

console.log(arr[arr.length-1]);
console.log(nomes[1]);
console.log(bool[2]);
console.log(misturado[1]);
*/


// Propriedades de um array
/*let nome = 'João';

console.log(nome.length);

let numeros = [1, 23, 35, 46, 82, 6, 7];

console.log(numeros.length); // Quantidade de caracteres

console.log(numeros[5]); //idicação de indice
*/



//Métodos são propriedades que funcionam como funções
    //string.propriedade
    //string.metodo()
/*let marca = 'Nike';

console.log(marca.toUpperCase());

let marca2 = marca.toUpperCase();

console.log(marca.toLowerCase());

console.log(typeof marca2.toLocaleLowerCase);
*/


//Objetos
/*let cachorro = {
    patas: 4,
    nome: 'Shark',
    latir: function(){
        console.log("Au Au");
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();
// [] = array
// {} = objeto
*/

/*
//Objetos: deletando e criando propriedades
let pessoa = {
    nome: 'Robero',
    idade: 32,
    profissao: 'Programador',
}

console.log(pessoa.nome);

delete pessoa.nome;//Deletando um objeto

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true;//Adicionando um objeto

console.log(pessoa.casado);

pessoa.nome = "Persan";

console.log(pessoa.nome);



//Assign: copiar as propriedades de um objeto para outro obijeto
let carro = {
    porta: 2,
    portamalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);

//Object.keys(): mostra somente as chaves de um objeto sem os seus valores
console.log(Object.keys(carro));


//Mutação(Mutability)
let pessoa1 = {
    nome: "Roberto"
}

//console.log(pessoa1.nome);


let pessoa2 = pessoa1;

pessoa2.nome = "Persan";

console.log(pessoa2.nome);

let pessoa3 = {
    nome: "José"
}
console.log(pessoa3.nome);
*/

/*
//Loop array
let nome = ['Beto','Roberto', 'Persan'];

for(let i = 0; i <= nome.length; i++){
    console.log(nome[i]);
}

//Método de array: Push e Pop
let elementoRemovido = nome.pop(); // O pop sempre ira remover o elemento do final do array

console.log(nome);

let addElemento = nome.push("Pereira"); // O push adiciona um elemento no array, mais sempre no final

console.log(nome);


//Método de array: shift e unshit
let tirandoDoInicio = nome.shift();// O shift ira retirar sempre o primeiro elemento de uma array

console.log(nome);

let addNoInicio = nome.unshift("Rebeca");// O unshift ira sempre adicionar um elemento na frente de uma array

console.log(nome);



//Métodos de array: indexOf e lastIndexOf
let primeiro =  [0, 5, 7, 4, 2, 8, 6, 9];

console.log(primeiro.indexOf(1));//O indexOf mostra em qual indice(Posição) esta o elemento solicitado, mas começando pelo primeiro

console.log(primeiro.lastIndexOf(5));//O lastIndexOf mostra em qual indice (Posição) esta o elemento solicitado, mas começando pelo ultimo


//Métodos de array: slice
console.log(primeiro.slice(1, 4));//O método slice mostra somente os indices que estão entre o elemento celecionado no inicio e o no final, no caso foi celecionado o elemento (1) como posição inícial e o elemento (3) como final, o slice mostraráos os indices começando pelo elemnto inicial e percorrera até o elemento selecionado como final, dando o resultado elementos([1, 2]) omitindo o ultimo elemto que foi pedido.

console.log(primeiro.slice(-3));//Nesse caso tambem podemos pedir que mostre os elementos de tras para frente no caso como pedimos -3 ele nos retornara os elementos([5, 6, 7]).

console.log(primeiro.slice());


//Métodos de array: forEach
let nomes = ["Paulo", "Julia", "Beto", "Roberto"];

nomes.forEach(nome =>{
    console.log(`Seu nome é ${nome}`);
});



//Métodos de array: includes
let carros = ["BMW", "FIAT", "VW", "RENAULT"];

console.log(carros.includes("FIAT"));//O includes verificarar se existe um elemento dentro do array, retornando true ou false.
console.log(carros.includes("FORD"));


//Métodos de array: reverse
let conta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(conta.reverse());// O reverse retornara qualquer array com posições invertidas, ou seja de trás para frete.



//Métodos de strings: trim
//O trim removera de uma string tudo que não for string
let texto = "     Beto";

let corrigido = texto.trim();

console.log(corrigido);



//Métodos de strings: padStart
let milContra = '21';

console.log(milContra.padStart(6, '0'));// O padStart acrecenta digitos na frente do elemento confome o número de casas determinado antes, padronizando assim a string que foi escolhida.



//Métodos de string: O split passa um conjunto de strings para o fomato em array, e o join faz o processo inverço, pegando um conjunto de array e passando para string por meio de um separador. 
let frase = "Banana; Maçã; Pera; bola; tapete";

let palavras = frase.split(';');
console.log(palavras);

let junta = palavras.join(' ');
console.log(junta);



let testRepeat = 'Texto ';

console.log(testRepeat.repeat(5));


//Rest oprator
let num = 1;
let num1 = 6;
let num2 = 3;

function imprimeNum(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}

imprimeNum(num, num1, num2);
console.log('pausa');
imprimeNum(2,4,7,9,12);


//Destructuring com array
let numeros = [2, 4, 6, 8];

let [nume1, nume2, nume3, nume4] = numeros;

console.log(nume3);

console.log(nume4);


const carro = {
    "marca":"BMW",
    "rodas": 4,
    "tipo":"sedan",
    "adicionais":["tetosolar", "banco de couro", "milha"]
}

let carroTexto = JSON.stringify(carro);

console.log(carroTexto);

let carroJSON = JSON.parse(carroTexto);

console.log(carroJSON);




//Exercícil 1:
let obj = ["Roberto", 12, "Rebeca", 29.5, true, 32];

console.log(obj[0]);
console.log(obj[2]);
console.log(obj[3]);


//Exercício 2: imprimir o número de cada elemento na tela
let unir = [2, 45];

let tudo = ["beto", "pate", "dan", "cris", "lucas"];

console.log(unir.length);

console.log(tudo.length);



//Exercício 3: Acessando as propriedades dos elementos
let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}


console.log(onibus.passageiros);
console.log(onibus.portas);

onibus.janelas = 20; //Incluindo um objeto novo e sua propriedade

delete onibus.rodas; //Deletando um objeto

console.log(onibus.janelas);

console.log(onibus.rodas);



//Execício 4: identificando se existe um elemnto dentro do array com includes
let nomes = ["Pate", "Dan", "Cris", "Beto"];

if(nomes.includes("Eley")){
    console.log(`O nome esta no array`);
}else{
    console.log("Nome não encontrado");
}



//Exercício 5:
let x = [2, 45, 6, 768, 4, 7, 86, 4];

let x1 = [3, 9, 2, 6];

function verifica(arr){

    if(arr.length >= 8){
        console.log("Muitos elementos");
    }else{
        console.log("Poucos elementos");
    }
}

verifica(x);
verifica(x1);




//Exercício 6: Interação entre os elementos
let intera = ["Banana", 2, true, 13, false];

for(let i = 0; i < intera.length; i++){
    console.log(intera[i]);
}



//Exercício 7: usando o JSON em uma variavel
const pessoa = {
    "nome": "Roberto",
    "peso": 82.3,
    "tamanho": 185
}

let humano = pessoa; 

delete humano.peso;

humano.apelido = "Beto";

console.log(humano.nome);
console.log(humano.peso);
console.log(humano.tamanho);
console.log(humano.apelido);



//Exercício 8: transfolar uma frase em array e mostrar usando o for
let frase = ("Esse é uma frase de tete");

let conta = frase.split(" ");

for(let i = 0; i < conta.length; i++){
    console.log(conta[i]);
}



//Exercício 9: Desafio da calculadora
const calculadora = {
    somar: function(a, b){
        return a + b;
    },
    subtrair: function(a, b){
        return a - b;
    },
    multiplicar: function(a, b){
        return a * b;
    },
    dividir: function(a, b){
        return a / b;
    }
}

 console.log(calculadora.somar(2, 5));
 console.log(calculadora.subtrair(2, 5));
 console.log(calculadora.multiplicar(2, 5));
 console.log(calculadora.dividir(2, 10));

 */