
const wheatherBody=document.querySelector('.wheather-body');
const input_data = document.querySelector(".input-box");
const search_Button = document.getElementById('search_btn');

const image = document.querySelector("img");

const temperature = document.querySelector('.wheather-temp');
const description = document.querySelector('.wheather-description');

const humidity = document.querySelector('.wheather-humidity');
const windspeed = document.querySelector('.wheather-windspeed');

const errorImage=document.createElement('img');
errorImage.src="./assets/404.png"

const error_message=document.createElement("h2");
error_message.textContent="Error ! 404"

async function display_wheather(city) {
    const api_key = "582cbadc520073bc58fb524d85cdb73e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const wheatherData = await fetch(url).then(response => response.json());
    console.log(wheatherData);
    if (wheatherData.cod === `404`) {
        wheatherBody.innerHTML="";
        wheatherBody.append(errorImage,error_message);
        errorImage.style.marginRight="100px";
        errorImage.style.marginBottom="20px";
        error_message.style.marginBottom="20px";
    }
    else {
        temperature.textContent = `${Math.round(wheatherData.main.temp - 273.15)}°C`;
        description.textContent = `${wheatherData.weather[0].description}`;
        windspeed.textContent = `${wheatherData.wind.speed}km/h`;
        humidity.textContent = `${wheatherData.main.humidity}%`;
        switch (wheatherData.weather[0].main) {
            case 'Clouds':
                image.src = "./assets/cloud.png";
                break;
            case 'Clear':
                image.src = "./assets/clear.png";
                break;
            case 'Rain':
                image.src = "./assets/rain.png";
                break;
            case 'Mist':
                image.src = "./assets/mist.png";
                break;
            case 'Snow':
                image.src = "./assets/snow.png";
                break;

        }

    }


}


search_Button.addEventListener('click', () => {
    display_wheather(input_data.value);
})