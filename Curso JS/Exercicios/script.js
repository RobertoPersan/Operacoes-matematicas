//Programa conta bancaria
/*
class Conta {
    constructor(saldo) { //Propriedade (Saldo)
        this.saldo = saldo;
    }

    deposito(valor) { //Método (deposito)
        this.saldo += valor;
    }

    saque(retira) { //Método (saque)
        this.saldo -= retira;
    }

}

let conta = new Conta(0);


conta.deposito(1500);

conta.saque(0);


console.log(conta.saldo);

*/


/*
//Programa carrinho de compras

class Carrinho{
    constructor(itens,quantTot, valorTot){ //Propriedades do meu Objeto
        this.itens = itens;
        this.quantTot = quantTot;
        this.valorTot = valorTot;
    }
   
    addItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].quantTot += item.quantTot;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.quantTot += item.quantTot;
        this.valorTot += item.valorTot * item.quantTot;
    }

    removeItem(item) {

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id){
                
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id});
                
                this.quantTot -= this.itens[itemCarrinho].quantTot;
                this.valorTot -= this.itens[itemCarrinho].valorTot * this.itens[itemCarrinho].quantTot;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        quantTot: 1,
        valorTot: 20
    },

    {
        id: 02,
        nome: "Calça",
        quantTot: 2,
        valorTot: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.addItem({id:01, nome:"Camisa", quantTot:2, valorTot:20});

console.log(carrinho);

carrinho.addItem({id:03, nome:"Sapato", quantTot:1, valorTot:90});

console.log(carrinho);

carrinho.removeItem({id:01, nome:"Camisa", quantTot:1, valorTot:20})

console.log(carrinho); 




class Endereco{//Propriedade de um Objeto
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    //Métodu SET para atualizar os parametros do objeto
    set novaRua(novaRua){
        this.rua = novaRua;
    }
    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let endereco = new Endereco('Rua Porto Alegre','km25','Simões Filho','Ba');

endereco.novaRua = 'Rua das Paumeiras';

console.log(endereco);




//Programa para abastecer um carro

class Carro{
    constructor(marca,cor,gasoRest,consumo){
        this.marca = marca;
        this.cor = cor;
        this.gasoRest = gasoRest;
        this.consumo = consumo;
    }    
    dirigir(km){
        let litrosConsumidos = km / this.consumo;

        this.gasoRest -= litrosConsumidos;
    }
    abastecer(l){
        this.gasoRest += l;
    }
}


let carro = new Carro('Ferrare','Vermelho',100, 14);

carro.marca = 'Mercedes';

carro.dirigir(100);

console.log(carro);

carro.abastecer(10);

console.log(carro);



//Programa de conta bancaria
class ContaBancaria{
    constructor(saldoCC,saldoCP,juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }
    deposito(valor){
        this.saldoCC += valor;
    }
    saque(valor){
        this.saldoCC -= valor;
    }
    transfereciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    transfereciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }
    jurosDeAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }

}

class ContaEspecial extends ContaBancaria{
    constructor(saldoCC,saldoCP,juros){
        super(saldoCC, saldoCP, juros * 2);
    }
}

let conta = new ContaBancaria(1500, 3000, 1);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transfereciaCP(3000);

console.log(conta);

conta.jurosDeAniversario();

console.log(conta);


let conta2 = new ContaEspecial(100000, 500000, 1);

console.log(conta2);

conta2.saque(5000);

console.log(conta2);





//Uso do STRICT para deixar o codigo mais alinhado, mostrando pociveis erros
"use strict"

let opa = 'teste';

//delete Object.prototype;

function teste(){
    //"use strict"
   let testando = 'teste';
}

teste();






//Usando o DEBUGGER para ver o que esta acontecendo no codigo
let a = 1;
let b = 2;

if(a == 1){
    a = b + 2;
}

debugger

for(i = 0; i < b; i++){
    a = a + 2;
    debugger;
}



if(a > 10){
    a == 25;
}

console.log('teste');

*/


function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        console.log('Por favor. passe só números para o programa');
    }else{
        return number;
    }
}

checarNumero(5);
checarNumero('aosfb');