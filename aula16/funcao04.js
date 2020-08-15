//Função para calcular o fatorial de um número
//5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) { //Cria a função
    let fat = 1;
    for (let c = n; c > 1; c--) { //Cria o contador; enquando c for maior que 1, c perde 1;
        fat *= c; //Fat recebe ela mesma * c;
    }
    return fat; //Retorna fat;
}

console.log(fatorial(5));