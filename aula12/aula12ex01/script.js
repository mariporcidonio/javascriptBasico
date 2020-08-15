function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var msghora = window.document.getElementById('msghora');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}h:${min}min.`;
    if (hora >= 0 && hora < 12) {
        msghora.innerHTML = "Bom dia!";
        img.src = "fotomanha.png";
        document.body.style.background = '#e2cd9f';
    } else if (hora > 12 && hora <= 18) {
        msghora.innerHTML = "Boa tarde!";
        img.src = "fototarde.png";
        document.body.style.background = '#b9846f';
    } else{
        msghora.innerHTML = "Boa noite!";
        img.src = "fotonoite.png";
        document.body.style.background = '#515154';
    }
}