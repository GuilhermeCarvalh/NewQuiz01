
let titulo = window.document.querySelector('h1')
let instrucoes = window.document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 
let placar = 0 

/*Pergunta*/
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

/*Alternativas*/

let a = window.document.querySelector('#a')
let b = window.document.querySelector('#b')
let c = window.document.querySelector('#c')

//Article com a  class questões 
let articleQuestoes = document.querySelector('.questoes')
//Ol LI com as alternativas
let alternativas = window.document.querySelector('#alternativas')

const q0 = {
    numQuestao : 0,
    pergunta :'pergunta',
    altertivaA : 'AltertivaA',
    altertivaB : 'AltertivaB',
    altertivaC : 'AltertivaC',
    correta : 0,
}
const q1 = {
    numQuestao : 1,
    pergunta :'Boreal é o mesmo que...',
    altertivaA : 'Sul',
    altertivaB : 'Leste',
    altertivaC : 'Norte',
    correta : 'Norte',
}
const q2 = {
    numQuestao : 2,
    pergunta :'Austral é o mesmo que...',
    altertivaA : 'Oeste',
    altertivaB : 'Sul',
    altertivaC : 'Norte',
    correta : 'Sul',
}
const q3 = {
    numQuestao : 3,
    pergunta :'Nascente é o mesmo que...',
    altertivaA : 'Sul',
    altertivaB : 'Leste',
    altertivaC : 'Oeste',
    correta : 'Leste',
}
const q4 = {
    numQuestao : 4,
    pergunta :'Poente é o mesmo que...',
    altertivaA : 'Norte',
    altertivaB : 'Leste',
    altertivaC : 'Oeste',
    correta : 'Oeste',
}
const q5 = {
    numQuestao : 5,
    pergunta :'O Brasil se Localiza em qual continente ? ',
    altertivaA : 'Africa?',
    altertivaB : 'Europa',
    altertivaC : 'América',
    correta : 'América',
}

// Constante com um array de objetos que contem todas as questões
const questoes = [
    q0,q1,q2,q3,q4,q5
]

let numero = window.document.querySelector('#numero')
let total = window.document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) -1
console.log('Total de questões ' + totalDeQuestoes)
total.textContent = totalDeQuestoes

//Montar a 1 questao completa, para iniciar o quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.altertivaA
b.textContent = q1.altertivaB
c.textContent = q1.altertivaC


// Configurar o value inicial da 1 questão completa
a.setAttribute('value','1A')
b.setAttribute('value','1B')
c.setAttribute('value','1C')

// Montará as proximas questões 

function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].altertivaA
    b.textContent = questoes[nQuestao].altertivaB
    c.textContent = questoes[nQuestao].altertivaC
    a.setAttribute('value',nQuestao + 'A')
    b.setAttribute('value',nQuestao + 'B')
    c.setAttribute('value',nQuestao + 'C')
}

function bloaquearAlternativas(){
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}    

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao,resposta) {
    let numeroDaQuestao = nQuestao.value

    let respostaEscolhida = resposta.textContent

    let certa = questoes[numeroDaQuestao].correta

    if(respostaEscolhida == certa){
        pontos += 10
    }
    //Atualizar placar 
     placar = pontos 
     instrucoes.textContent = ' Pontos ' + placar 

     //Bloquear a esolha de opções
     bloaquearAlternativas()
     
     setTimeout(function(){
        proxima = numeroDaQuestao + 1
        if(proxima > totalDeQuestoes){
            console.log('Fim do jogo')
            fimDoJogo()
        }else{
            proximaQuestao(proxima)
        }
     },250)
     desbloquearAlternativas()
}

function fimDoJogo(){
    instrucoes.textContent =  'Fim do Jogo'
    numQuestao.textContent = ''

    let pont = ''
    pontos == 0 ? pont = 'ponto': pont = 'pontos'

    pergunta.textContent = 'Você conseguiu ' + pontos + ' ' + pont
    aviso.textContent = 'Você conseguiu ' + pontos + ' ' + pont

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    //Ocultar article da questao 
    articleQuestoes.style.display = 'none'

    setTimeout(function(){
        pontos = 0
        location.reload()
    },2000)
}