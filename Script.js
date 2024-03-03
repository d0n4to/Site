function mostraOra() {
    var oggi = new Date();
    var h = oggi.getHours();
    var m = oggi.getMinutes();
    var s = oggi.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('orario').innerHTML = h + ":" + m + ":" + s;
    setTimeout(mostraOra, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
mostraOra();

