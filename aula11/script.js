function verificar(){
    var pais = window.document.querySelector('input#nac').value.toLowerCase();
    var res = window.document.querySelector('p#res');
    if (pais != 'brasil') {
        res.innerHTML = ('Você é <strong>estrangeiro</strong>.');
    } else {
        res.innerHTML = ('Você é <strong>brasileiro</strong>.');
    }
}