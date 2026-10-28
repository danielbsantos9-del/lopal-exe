alert("Wifi da padaria")

const PASSWORD = "paoquentinho123"
let attempts = 0 

while (attempts < 3) {
    let enter_password = prompt("digite a senha: ")
    if (enter_password === PASSWORD) {
        alert("Conectado, bom café!")
        break
    } else {
        alert("Senha incorreta! >:(")
    } if (attempts === 2) {
        alert("bloqueado.")
    }
    attempts++
}

alert ("Contagem regressiva para o ano novo!")

const NewYear = "feliz ano novo!"
let contagem = 10

while (contagem >= 1) {
    let contagem = (-1)
    if (contagem <= 1)
        alert (NewYear)
    break
}
