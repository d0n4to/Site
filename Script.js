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

// Script.js

document.addEventListener("DOMContentLoaded", function () {
    // Sostituisci 'YOUR_API_KEY' con la tua chiave API di OpenWeatherMap
    const apiKey = 'YOUR_API_KEY';
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Effettua la richiesta API al momento del caricamento della pagina
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Estrai le informazioni sulla temperatura
            const temperature = data.main.temp;

            // Aggiorna il paragrafo con l'id 'orario' nell'header
            const orarioElement = document.getElementById('orario');
            if (orarioElement) {
                orarioElement.innerHTML = `Temperatura a ${city}: ${temperature}°C`;
            }
        })
        .catch(error => console.error('Errore nella richiesta API meteo:', error));
});
