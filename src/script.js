const search = document.getElementById("search");
const button = document.getElementById("search-button");
const image = document.getElementById("image");
const weatherInformation = document.getElementById("weather-information");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const country = document.getElementById("country");

API_KEY = "a053c811ccda4d46759bfdf586d7ebc1";

requestApi("amerika serikat", API_KEY);

function requestApi(city, key) {
   fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
   )
      .then((response) => response.json())
      .then((response) => {
         const weather = response.weather[0];

         console.log(weather.main);

         switch (weather.main) {
            case "Clear":
               image.src = "src/images/clear.png";
               break;
            case "Clouds":
               image.src = "src/images/clouds.png";
               break;
            case "Drizzle":
               image.src = "src/images/drizzle.png";
               break;
            case "Haze":
               image.src = "src/images/mist.png";
               break;
            case "Rain":
               image.src = "src/images/Rain.png";
               break;
            case "Snow":
               image.src = "src/images/snow.png";
               break;
         }

         country.innerHTML = response.name;
         humidity.innerHTML = response.main.humidity;
         wind.innerHTML = response.wind.speed;
         weatherInformation.innerHTML = weather.description;
         search.value = "";
      })
      .catch((err) => {
         if (err) {
            weatherInformation.innerHTML = "404 Not Found:)";
            image.style.width = "80%";
            image.src = "src/images/rejected.png";
         }
      });
}

button.addEventListener("click", function () {
   if (!search.value == "") {
      image.src = "";
      weatherInformation.innerHTML = "";
      wind.innerHTML = "";
      humidity.innerHTML = "";
      country.innerHTML = "";

      requestApi(search.value.toLowerCase(), API_KEY);
   }
});
