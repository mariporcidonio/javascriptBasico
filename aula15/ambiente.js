let num = [500, 8, 2, 9, 3]; //Cria um vetor

num [5] = 7; //Adiciona um valor quando se sabe o último índice utilizado - variável [posição] = valor;
num.push(1); //Adiciona um valor no último índice vazio;
num.sort(); //Coloca em ordem crescente os elementos do vetor - somente a primeira casa decimal. Funciona tbm com strings.
console.log(num); //Exibe uma variável;
console.log(`O vetor tem ${num.length} posições.`); //Mostra o comprimento do array;
console.log(`O primeiro valor do vetor é ${num[0]}`); //Mostra o elemento que está na posição entre chaves;
console.log(num);
console.log(`O último elemento do vetor é: ${num.slice(-1)[0]}`); //Mostra o último elemento do array;
console.log(`Também mostra o último elemento do array ${num[num.length -1]}`); //Mostra o último elemento do array;

let pos = num.indexOf(500); //num.indexOf(4) - procura o elemento 4 dentro do array;
if (pos == -1) { //Se o JS retornar -1 é pq não encontrou;
    console.log(`O valor não foi encontrado!`);
} else { //Senao retorna a posição solicitada;
    console.log(`O valor está na posição ${pos}`);
}
