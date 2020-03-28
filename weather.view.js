class WeatherView {
    constructor() {
        const model = new WeatherModel();
        this.data = model.getData();
        document.addEventListener('change', this.handleChange.bind(this));
    }

    handleChange(e) {
        if (e.target.id === 'deg') {
            localStorage.setItem('temperature', e.target.value);
            this.tempCelsius();

        } else if (e.target.id === 'fah') {
            localStorage.setItem('temperature', e.target.value);
            this.tempFahrenheit();
        }
    }

    async tempCelsius() {
        const data = await this.data;
        const tempC = data.main.temp - 273.15;
        const span = document.querySelector('.js-temp');
        span.innerHTML = tempC.toFixed(1) + '&deg;C';
        return span;
    }

    async tempFahrenheit() {
        const data = await this.data;
        const tempF = data.main.temp;
        const span = document.querySelector('.js-temp');
        span.innerHTML = tempF + '&deg;F';

    }

    setDefatul() {
        const temp = localStorage.getItem('temperature');
        if (temp) {
            document.querySelector('#' + temp).setAttribute('checked', true);
        }
    }
}
const view = new WeatherView();


view.setDefatul();


