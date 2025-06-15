/*Função que mostra uma mensagem abaixo do botão*/

const botao = document.querySelector("#botao")
const resposta = document.querySelector("#mensagem")

botao.addEventListener("click", abrirMensagem)

function abrirMensagem() {
  resposta.innerHTML =
    'Olá, seja bem-vindo à minha página de autobiografia! Fique o tempo que quiser... só não bagunce :) <span class="citacao">"Cresça, independente do que aconteça"</span>.'
}
