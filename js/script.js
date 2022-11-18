let userName = prompt('Qual è il tuo nome?')
let userSurname = prompt('Qual è il tuo cognome?')
let favouriteColour = prompt('Qual è il tuo colore preferito?')
let passWord = userName + userSurname + favouriteColour + 69

document.getElementById("passwordgen").innerHTML = passWord
