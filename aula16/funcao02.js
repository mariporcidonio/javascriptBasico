function somar(n1, n2){
    return n1 + n2;
}
console.log(somar(7, 20));

//No exemplo abaixo, se o valor do parâmetro não for indicado, recebe 0 auto
function subtrair(n1 = 0, n2 = 0) {
    return n1 - n2;
}
console.log(subtrair(10));
