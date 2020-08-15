//Função -> Chamada -> Parâmetro -> Ação -> Retorno
function parimp(n) { //Função
    if (n % 2 == 0) { //Ação - se o resto de n/2 = 0:
        return 'Par' //N = Par
    } else { //Senão
        return 'Ímpar' //Retorno - N = Ímpar
    }
}
/* 
let res = parimp(589);
console.log(res); 
*/
console.log(parimp(20));
