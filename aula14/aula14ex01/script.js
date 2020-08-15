function contar() {
    //Cria as variáveis e vincula aos inputs.
    let ini = document.getElementById('txti');
    let passo = document.getElementById('txtp');
    let fim = document.getElementById('txtf');
    let res = document.getElementById('res');
    //Converte os valores digitados nos inputs para número.
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    //Primeira validação: se ini ou fim ou passo forem do comprimento 0: erro.
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar.";
    //Senão,
    } else {
        //Inicia a contagem:
        res.innerHTML = "Contando: <br>";
        //Se passo = 0, considera passo = 1;
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }

        //Se inicio for menor ou igual ao fim:
        if (i <= f) {
            //Contagem crescente.
            //Para (cria variável c = inicio; c <= f; c recebe ele mesmo + passo).
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            //Contagem regressiva.
            //Para (cria variável c = inicio; c >= f; c perde o passo).
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        //Mostra a bandeirinha no final da contagem.
        res.innerHTML += `\u{1F3C1}`;
    }
}