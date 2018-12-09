/*API*/
/*8b8a13455c8aae8dcc4d20c5fc0aea9c*/
/*
function pobierzPogode() {
    var x = document.getElementById("miasto").value;
    document.getElementById("demo").innerHTML = x;
    fetch('http://api.openweathermap.org/data/2.5/find?q=' + x + '&units=metric&APPID=8b8a13455c8aae8dcc4d20c5fc0aea9c')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
        
}*/
function pobierzPogode() {
    var x = document.getElementById("miasto").value;
    document.getElementById("demo").innerHTML = x;
    fetch("http://api.openweathermap.org/data/2.5/find?q=" + x + "&units=metric&APPID=8b8a13455c8aae8dcc4d20c5fc0aea9c")
      .then(res => res.json())
      .then(data => obj = data)
      .then(() => {
        console.log(obj);
        wyswietlPogode(obj);
        var temperatura = obj.list[0].main.temp;
        console.log(temperatura);
        return obj;
        });
        function wyswietlPogode(obj) {
            document.getElementById("temp").innerHTML = 'Temperatura: ' + obj.list[0].main.temp + ' stopni';
            document.getElementById("humidity").innerHTML = 'Wilgotność: ' + obj.list[0].main.humidity +'%';
            document.getElementById("pressure").innerHTML = 'Ciśnienie: ' + obj.list[0].main.pressure + ' hPa';
        }
    }




