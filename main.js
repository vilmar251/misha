let attempts = 0;
let diсe1=0
let dice2=0

while (true) {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    attempts++;
    if (dice1 === dice2) break;
}

console.log(`Дубль выпал после ${attempts} попыток.`);
