'use strict'

const botaoTrocarCor = document.getElementById('trocar-cor')

function trocarCor () {
   const cor = document.getElementById('cor').value
   document.documentElement.style.setProperty('--cor-bg', cor)
}

botaoTrocarCor.addEventListener('click', trocarCor)