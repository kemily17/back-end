/* Arquivo base para realização da Atividade de Revisão do 1º TRIMESTRE */

// 1) Criação de variável de texto e numérica
let nome = "Kemily";
let idade = "17";

// 2) Criação de uma lista
let frutas = ["maçã", "banana", "laranja", "uva"];

// 3) Utilização de um laço while
let contador = 0;
while (contador < frutas.length) {
    console.log("Fruta: " + frutas[contador]);
    contador++;
}
// 4) Criação de um objeto
let aluno = {
    nome: "kemily",
    idade: 17,
    turma: "3DS",
    ativo: true
}
// 5) Utilização de if-else
if (aluno.ativo) {
    console.log(aluno.nome + " está ativa na turma.");
} else {
    console.log(aluno.nome + " não está ativa na turma.");
}

// 6) Criação de uma função que analisa os dados da previsão do tempo
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
];

function analisarPrevisao(previsoes) {
    for (let i = 0; i < previsoes.length; i++) {
        let dia = previsoes[i].dia;
        let chuva = previsoes[i].chanceDeChuva;

        if (chuva >= 50) {
            console.log(`⚠️ No(a) ${dia} há alta chance de chuva (${chuva}%). Leve um guarda-chuva!`);
        } else {
            console.log(`🌤️ No(a) ${dia} há baixa chance de chuva (${chuva}%). Aproveite o dia!`);
        }
    }
}