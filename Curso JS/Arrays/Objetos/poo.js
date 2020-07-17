/*
//Métodos
let cachorro = {
    latir: function(){
        console.log("Au au");
    },
    rosnar: function(){
        console.log("Grrrrr")
    }
}

cachorro.latir();
cachorro.rosnar();

let pessoa = {
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome;
    },
    getNome: function(){
        return 'Seu nome é ' + this.nome;
    }
}

pessoa.setNome("Roberto");

console.log(pessoa.getNome());




//Prototype:
const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));

console.log(pessoa.hasOwnProperty("maos"));

const pessoaNova = Object.create(pessoa); //Fazendo o novo objeto herdar o primeiro objero, ele agora pode acessar as propriedades do primeiro obijeto.

console.log(pessoaNova.maos);




//Classe
let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function() {
        console.log("Au au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();




//Classe: Construtor por função

function criarCachorro(raca, patas, cor){
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    return cachorro;
}

let dogAlemao = criarCachorro("Dog Alemão", 4, "Rajado");

console.log(dogAlemao);

*/

//Classe: construtor po new
