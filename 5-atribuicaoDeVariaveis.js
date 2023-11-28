console.log("Atribuição de Variaveis!");

const primeiroNome = "Luís Felipe";
const sobrenome = "Garcia Menezes"

// Ambos tem o mesmo efeito de separar os textos com espaço em branco
//console.log(nome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`); // utilizar Crase é possível interpolar variáveis através do ${}

let contador = 0;
contador = contador + 1;

const nomeCompleto = primeiroNome + " " + sobrenome;
console.log(nomeCompleto);
//nomeCompleto = 2; Erro de atribuição pois a variavel nomeCompleto é uma const (Constante Imutavel), utiliza-se let para mudar o tipo da variável

let idade; //decalrando variável
idade = 20; //atribuindo valor
idade = idade + 1;
console.log(idade); 
