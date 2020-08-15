let compra = function(x) {
    if (x >= 100) {
        let result = `O valor da compra foi de R$${x}. Você ganhou um refrigerante!`;
        return result;
    } else {
        let res = 100 - x;
        let result = `Adicione mais R$${res} em compras para ganhar o refrigerante.`;
        return result;
    }
}
console.log(compra(98));