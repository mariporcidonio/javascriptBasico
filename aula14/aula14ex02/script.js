function gerar() {
    let num = document.getElementById('txtnum');
    //let num = Number(txtnum.value);
    let tab = document.getElementById('seltab');

    //Se o comprimento do campo num = 0:
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
    //Senão cria as variáveis para o cálculo
        let n = Number(num.value);
        let c = 1;
        //Limpa o select quando inica a tabuada
        tab.innerHTML = '';
        while (c <= 10) {
            //Cria os itens no select 
            let item = document.createElement('option');
            //Mostra o cálculo
            item.text = `${n} x ${c} = ${n*c}`;
            //Cria o value do select (serve pra outras linguagens)
            item.value = `tab${c}`;
            //Adiciona um elemento filho ao select item -> tab -> seltab
            tab.appendChild(item);
            //Variável contadora
            c++;
        }
    }
}