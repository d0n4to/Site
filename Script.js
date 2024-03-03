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

document.addEventListener('DOMContentLoaded', function() {
    var shareButton = document.getElementById('share-btn');
    var url = 'https://ilribellepz.github.io/Site/';
    var title = 'Titolo dell\'Ultimo post pubblicato: data (es.03 Mar)';
    
    shareButton.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            }).then(() => {
                console.log('Articolo condiviso con successo');
            }).catch((error) => {
                console.error('Errore durante la condivisione:', error);
            });
        } else {
            console.log('API navigator.share non supportata');
            // Fallback se l'API non è supportata
            // Puoi aprire manualmente la finestra di condivisione per i social media
            // o utilizzare altre tecniche di condivisione compatibili con il browser
        }
    });
});