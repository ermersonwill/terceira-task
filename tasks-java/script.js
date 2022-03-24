// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
// 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.
// 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.
// 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 
// 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
// 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).
// EstruturaDeDecisao
// 1.	Faça um Programa que peça dois números e imprima o maior deles.
// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// 2.	A mensagem "Reprovado", se a média for menor do que sete;
// 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.
// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.
// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.

// ____________________________________________________________________________________________

    // 1- Primeira task

    // let nome = (prompt("Digite seu nome"));
    // alert("Seu nome é " + nome);
    // console.log(nome);

 // ___________________________________________________________________________________________

    // 2- Segunda task

    // let num1 = parseInt(prompt("Digite um numero"));
    // let num2 = parseInt(prompt("Digite outro numero"));
    // console.log(num1 + num2);

// ____________________________________________________________________________________________

    // 3- Terceira task

    // let nota1 = parseInt(prompt("Digite sua primeira nota"));
    // let nota2 = parseInt(prompt("Digite sua segunda nota"));
    // console.log((nota1 + nota2)/2);

// _____________________________________________________________________________________________

    // 4- Quarta task

    // let anoNascimento = parseInt(prompt("Digite o ano que você nasceu"));
    // console.log(2022 - anoNascimento);

// _____________________________________________________________________________________________

    // 5- Quinta task

    // let salarioHora = parseInt(prompt("Digite quanto vc recebe por hora"));
    // let horaMes = parseInt(prompt("Digite quantas horas vc trabalhou esse mes"));
    // console.log(salarioHora * horaMes);

// _____________________________________________________________________________________________

    // 6- Sexta task

    // let temperaturaFah = parseFloat(prompt("DIigite a temperatura em farhrenheit"));
    // console.log (((temperaturaFah - 32) * 5)/9);

// _____________________________________________________________________________________________

    // Extrutura de decisão

    // 1- Primeira task

    // let num1 = (prompt("Digite um numero"));
    // let num2 = (prompt("Digite outro numero"));

    // if(num1 > num2){
    //     console.log(num1);
    // } else {
    //     console.log(num2);
    // }

// _____________________________________________________________________________________________

    // 2- Segunda task

    // let num = (prompt("Digite um numero"));

    // if(num >= 0) {
    //     alert("O numero é positivo");
    // } else {
    //     alert("O numero é negativo");
    // }

// _____________________________________________________________________________________________

    // 3- Terceira task

    // let sexo = (prompt("Digite M ou F para indicar seu sexo"));

    // if(sexo == "m") {
    //     alert("Seu sexo é masculino");
    // } 
    // else if(sexo == "f") {
    //     alert("Seu sexo é feminino");
    // } else {
    //     alert("Sexo invalido");
    // }

// ____________________________________________________________________________________________

    // 4- Quarta task

    // let nota1 = parseInt(prompt("Digite sua primeira nota"));
    // let nota2 = parseInt(prompt("Digite sua segunda nota"));
    // let media = ((nota1 + nota2)/2);

    // if(media >= 7 && media < 10){
    //     alert("Aprovado");
    // }
    // else if(media < 7 && media == 0){
    //     alert("Reprovado");
    // }
    // else if(media == 10) {
    //     alert("Aprovado com Distinção");
    // }else{
    //     alert("Nota invalida");
    // }

// ____________________________________________________________________________________________

    //   5- Quinta task

    // let num1 = parseInt(prompt("Digite um numero"));
    // let num2 = parseInt(prompt("Digite um numero"));
    // let num3 = parseInt(prompt("Digite um numero"));
    // let maior = (num1);
    // let menor 

    // if(num2 > num1 && num2 > num3) {
    //     maior = (num2);
    // }
    // else if(num3 > num1 && num3 > num2){
    //     maior = (num3);
    //     menor = (num1);
    // }
    // else if(num2 < num1 && num2 < num3){
    //     menor = (num2);
    // }
    // else if(num3 < num1 && num3 < num2){
    //     menor = (num3);
    // }
    // alert("Maior numero é " +maior);
    // alert("Menor numero é " +menor);

// _________________________________________________________________________________________-__

    // 6- Sexta task

    // let num1 = parseInt(prompt("Digite um numero"));
    // let num2 = parseInt(prompt("Digite outro numero"));
    // let par
    // let impar
    // let par1
    // let impar1

    // if(num1 % 2 == 0 ) {
    //     par = (num1)
    // }else {
    //     impar = (num1)
    // }
    // if(num2 % 2 == 0 ) {
    //     par1 = (num2)
    // }else {
    //     impar1 = (num2)
    // }
    // if(num1 == par){
    //     alert("o numero é par")
    // }else {
    //     alert("O numero é impar")
    // }
    // if(num2 == par1){
    //     alert("o numero é par")
    // }else {
    //     alert("O numero é impar")
    // }