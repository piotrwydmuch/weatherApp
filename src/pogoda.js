/*API*/
/*8b8a13455c8aae8dcc4d20c5fc0aea9c*/

function pobierzPogode() {
    var x = document.getElementById("miasto").value;
    fetch("http://api.openweathermap.org/data/2.5/find?q=" + x + "&units=metric&APPID=8b8a13455c8aae8dcc4d20c5fc0aea9c")
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => {
        console.log(obj);
        wyswietlPogode(obj);
        wyswietlMape(obj);
        wyswietlObrazek(obj);
        document.getElementById("szukaj").addEventListener("click", obj.reset());
        });
    
    }

function refreshPage() {
    window.location.reload();
}


function wyswietlPogode(obj) {
    document.getElementById("demo").innerHTML = obj.list[0].name + ', ' + obj.list[0].sys.country;
    document.getElementById("temp").innerHTML = 'Temperature: ' + obj.list[0].main.temp + ' Celsius degrees';
    document.getElementById("humidity").innerHTML = 'Humidity: ' + obj.list[0].main.humidity + '%';
    document.getElementById("pressure").innerHTML = 'Presure: ' + obj.list[0].main.pressure + ' hPa';
}

function wyswietlMape(obj) {
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2FycTkwIiwiYSI6ImNqcGhhaDkzaTByeXEza252ZGJ4dTV5ZWwifQ.Dj0o-MjE7ZheR8YXyZGlHQ';
    var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([obj.list[0].coord.lat, obj.list[0].coord.lon], 13);
}

function wyswietlObrazek(obj) {
    var ikona;
    let warunek = obj.list[0].weather[0].icon;
    document.getElementById("obrazek").src = "http://openweathermap.org/img/w/" + warunek + ".png";
    document.getElementById("opisPogody").innerHTML = obj.list[0].weather[0].description;
}




