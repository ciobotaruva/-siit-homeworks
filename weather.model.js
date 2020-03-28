class WeatherModel {
    apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=081d50bc5ecfaa4fedc4826c07da4611';

    getData() {
        return fetch(this.apiUrl).then(res => res.json());
    }

}










