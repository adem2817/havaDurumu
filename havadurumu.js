function makeRequest() {
    if (document.getElementById('ulke').value.length < 1) {
        alert('ulke kodu giriniz');
        console.log('ulke kodu giriniz');
        return null;
    } else if (document.getElementById('sehir').value.length < 1) {
        alert('sehir adi giriniz');
        console.log('şehir bilgisi giriniz');
        return null;
    }

    var countryCode = document.getElementById('ulke').value; //tr, en, fr
    var city = document.getElementById('sehir').value; //ankara, istanbul

    console.log('country code value from input : ' + countryCode);
    console.log('city value from input : ' + city);

    var apikey = 'bba773d2ae5d4edac55337c0826fd7be'
    var urlString = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + countryCode + '&lang=tr' + '&appid=' + apikey
    //console.log('url:' + urlString)

    // Make a request for a user with a given ID
    axios.get(urlString)
        .then(function (response) {
            // handle success
            var min = parseInt(response.data.main.temp_min) - 273 + '&#8451';
            var max = parseInt(response.data.main.temp_max) - 273 + '&#8451';

            console.log('city : ' + response.data.name);
            console.log('temperature : ' + (parseInt(response.data.main.temp) - 273) + ' degree');
            console.log('description : ' + response.data.weather[0].main);
            console.log('min and max temperature values : ' + (parseInt(response.data.main.temp_max) - 273) + ' degree' + ' / ' + (parseInt(response.data.main.temp_min) - 273) + ' degree');

            document.getElementById('city').innerHTML = response.data.name;
            document.getElementById('temp').innerHTML = parseInt(response.data.main.temp) - 273 + '&#8451';
            document.getElementById('desc').innerHTML = response.data.weather[0].main;
            document.getElementById('minmax').innerHTML = min + ' / ' + max;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            alert('uygulama sırasında hata meydana geldi. bilgileri kontrol ediniz.')
        })
        .then(function () {
            // always executed
        });
}