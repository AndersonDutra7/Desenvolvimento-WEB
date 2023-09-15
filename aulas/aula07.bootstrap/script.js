// var x;
// let y;
// const z;

// let texto = 'String'
// let inteiro = 20
// let decimal = 20.5
// let boleano = true
// let lista = ['a', 'q', 'c']
// let objeto = {
//     'nome': 'Anderson',
//     'email' : 'a@gmail.com'
// }
// let nulo = null
// let indefinido = undefined

// console.log(lista[3]);
// console.log(objeto['email']);
// inteiro.toString();

// // funções tradicionais
// function soma(a,b) {
//     return a + b
//  console.log(soma(5,5)); 
//  alert(soma(5,)); //- exibe uma notificação 
// } 

// /* arrow function */

// let soma = (a,b) => a+b
// console.log(soma(5,5)); 


// let objetoFuncao = {
//     'nome': 'Pedro',
//     'metodo': () => {
//        console.log(this.nome);
//    }
// }

// let objetoarrow = {
//     'nome': 'Pedro',
//     'metodo': function () { /*(nome)=>{*/
//        console.log(this.nome);
//    }
// }
// objetoarrow.metodo()


// let nome = prompt('nome');
// let idade = prompt('idade');
// let altura = prompt('altura');
// function Show (){
//     alert(`Seu nome é:${nome}`)
//     alert(`Sua idade é:${idade}`)
//     alert(`Sua altura é:${altura}`);
// }
// Show();
    
// let listaFuncao = ['maça','pera', 'uva']
// for (let x=0 ; x <lista.length ; x++){
//     console.log(lista[x]);
// }

// let x = 25
// function teste (){
//     for(let x = 0 ; x < 10 ; x++){
//     }
//     x = 1
// }
// console.log(x);
 
// let x = 2;
// let y = 2;
// let z = 2;

// /* condições: if - elif - else */
// if(x === z ){
//     console.log(`x é igual a z`);
//     }else if (x === y){
//         console.log(`x é diferente de z`);
//     }

// if (x == z && x==z || z ==x){
//     console.log(`x é igual a z`);

// }

//exercícios:
// A: todos os nomes de carro em caixa alta 
// B: uma lista com o nome todos os carros de igual ou mais 3 passageiros
// C: exigir o numero da vaga q cada carro esta estacionado - a posição do carro na lista + 5
// D: uma lista com todos os carros estacionados

carros = [
    ['Ford', 2, true],
    ['Volvo', 5, false],
    ['Ferrari', 2, true],
    ['Tesla', 4, false],
    ['Corsa', 1, true],
]


// // ferramenta para simplicar metodos javascript

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let listaQuadrado = []

// for(let i=0; i < lista.length ; i++){
//     listaQuadrado.push(lista[i] * lista[i])
// }

// console.log(listaQuadrado)

let quadrado = lista.map((numero)=>numero*numero)
console.log(quadrado);

let produtos = ['Carro', 'Moto', 'Bicicleta', 'Batera', 'Tobata']
let novo_nome = produtos.map((produto)=> produto + ' NOVO')
let filtro = produtos.filter((produto)=>produto === 'Moto')
console.log(novo_nome);
console.log(filtro);

let maiusculo = carros.map((nome)=>nome[0].toUpperCase())
console.log(maiusculo);

let passageiros = carros.filter((carro)=>carro[1] > 3).map((nome_carro)=>nome_carro[0])
console.log(passageiros);

let estacionado = carros.filter((carros)=>carros[2] == true).map((nome_carro)=>nome_carro[0])
console.log(estacionado);

// let numero_vaga = carros.map((vaga)=> vaga[3] == true)

const students = [
    {nome: 'Alice', nota: 85},
    {nome: 'Bob', nota: 72},
    {nome: 'Charlie', nota: 90},
    {nome: 'David', nota: 65},
    {nome: 'Eve', nota: 88}
]

// 1- Um array contendo todas as notas
// 2 - O nome dos alunos com a nota acima da média

let todas_notas = students.map((aluno)=> aluno.nota);
console.log(todas_notas);

let somaDasNotas = students.reduce((total, aluno) => total + aluno.nota, 0);
let mediaDasNotas = somaDasNotas / students.length;

let alunosAcimaDaMedia = students.filter((aluno) => aluno.nota > mediaDasNotas);

let nomesDosAlunosAcimaDaMedia = alunosAcimaDaMedia.map((aluno) => aluno.nome);

console.log(nomesDosAlunosAcimaDaMedia);
