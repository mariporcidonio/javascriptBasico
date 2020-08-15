let num = [5, 8, 2, 9, 3];

/*for (let pos = 0; pos < num.length; pos++) {
    console.log(`O elemento ${num[pos]} está na posição ${pos}`);
}
*/

for (let pos in num) { //Exibe os elementos do array e suas respectivas posições
    console.log(`O elemento ${num[pos]} está na posição ${pos}.`);
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

//Ver funcionalidade de for(x of y) {}
for (let pos of num) {
    console.log(`Posição: ${pos} / Elemento: ${num[pos]}.`);
}