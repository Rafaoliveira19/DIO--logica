let saldoFinal = saldoPartidas(74, 5)
let classe = ""
let nivel = ranking(saldoFinal)

function saldoPartidas (wins, losses){
    let saldo = (wins - losses)
    return saldo
}

function ranking(saldoFinal){
    if (saldoFinal < 10) {
        classe = "Ferro"
        return classe
    } else if (saldoFinal >= 11 && saldoFinal <= 20){
        classe = "Bronze"
        return classe
    } else if (saldoFinal >=21 && saldoFinal <= 50){
        classe = "Prata"
        return classe
    } else if (saldoFinal >= 51 && saldoFinal <= 80){
        classe = "Ouro"
        return classe
    } else if (saldoFinal >= 81 && saldoFinal <= 90){
        classe = "Diamante"
        return classe
    } else if (saldoFinal >= 91 && saldoFinal <= 100){
        classe = "Lendário"
        return classe
    } else if (saldoFinal => 101){
        classe = "Imortal"
        return classe
    }
}

console.log(`o saldo final foi de ${saldoFinal} de vitorias e esta na classe ${nivel}`)