let nome = "Lancelot"
let pontosXP = 2450
let nivel = ""

if (pontosXP <= 1000){
    nivel = "Ferro"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP >= 1001 && pontosXP <= 2000){
    nivel = "Bronze"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP >= 2001 && pontosXP <= 5000){
    nivel = "Prata"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP >= 6001 && pontosXP <= 7000){
    nivel = "ouro"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP >= 7001 && pontosXP <= 8000){
    nivel = "Platina"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP >= 8001 && pontosXP <= 9000){
    nivel = "Ascendente"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP >= 9001 && pontosXP <= 10000){
    nivel = "Imortal"
    console.log("Você chegou ao nivel ", nivel);
} else if (pontosXP > 10000){
    nivel = "Radiante"
    console.log("Você chegou ao nivel ", nivel)
}

console.log("O Herói de nome " + nome, " esta no nivel " + nivel);