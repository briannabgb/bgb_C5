const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');

const timezone = document.getElementById('time-zone');
const cityEl = document.getElementById('city');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');

const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',]

const API_KEY = '47b00953b1a0025a21e413090b7eab0f'

setInterval(() => { 
	const time = new Date ();
	const month = time.getMonth();
	const date = time.getDate();
	const day = time.getDay();
	const hour = time.getHour();
	const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
	const minutes = time.getMinutes();
	const ampm = hours >=12 ? 'PM' : 'AM'

	timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes + ' ' + '<span iid = "am-pm">${ampm}</span>'

	dateEl.innerHTML = days[day] + ',' + date + ' ' + months[month]


}, 1000);

function getWeatherData() {
	navigator.geolocation.getCurrentPosition((success) => {
		console.log(sucess);

		let {latitude, longitude } = success.coords;
		fetch('https://api.openweathermap.org/data/3.0/onecall?lat=$
		latitude}&lon=${longitude}&exclude={part}&appid=$ {API_KEY}')

	})

}

