'use strict'

const botaoTrocarCor = document.getElementById('trocar-cor')

function trocarCor () {
   let cor = document.getElementById('cor').value.trim().toLowerCase()

   if (cor === 'amarelo') {
       cor = 'yellow'
   } else if (cor === 'azul') {
       cor = 'blue'
   } else if (cor === 'verde') {
       cor = 'green'
   } else if (cor === 'vermelho') {
       cor = 'red'
   } else if (cor === 'laranja') {
       cor = 'orange'
   }

   document.documentElement.style.setProperty('--cor-bg', cor)
}

botaoTrocarCor.addEventListener('click', trocarCor)
