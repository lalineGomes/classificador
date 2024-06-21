const heroName="Laline";
let points = 11000;
let level

if (points <= 1000) {
 level = "Ferro"
} else if (points > 1000 & points <= 2000){
level = "Bronze"
    
} else if (points > 2000 & points <= 5000) {
    level = "Prata"
} else if (points >5000 & points <= 7000) {
    level = "Ouro"
} else if (points > 7000 & points <= 8000) {
    level = "Platina"
}else if (points > 8000 & points <= 9000) {
    level = "Ascendente"
}else if (points < 10000) {
    level = "Imortal"
} else  {
    level = "Radiante"
}


console.log (`O Herói de nome ${heroName} está no nível de ${level}`)