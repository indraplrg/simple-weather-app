const search = document.getElementById("search");
const button = document.getElementById("search-button");
const image = document.getElementById("image");
const weatherInformation = document.getElementById("weather-information");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

API_KEY = "a053c811ccda4d46759bfdf586d7ebc1";

button.addEventListener("click", function () {
   if (!search.value == "") {
      weatherInformation.innerHTML = "";
      wind.innerHTML = "";
      humidity.innerHTML = "";

      fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${search.value.toLowerCase()}&appid=${API_KEY}`
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

            humidity.innerHTML = response.main.humidity;
            wind.innerHTML = response.wind.speed;
            weatherInformation.innerHTML = weather.description;
            search.value = "";
         })
         .catch((err) => {
            if (err) weatherInformation.innerHTML = "404 Not Found:)";
         });
   }
});
