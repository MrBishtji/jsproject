const apiKey = "ef5d46108c13456a661b2f4b36f34419";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const SearchInp = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorMsg = document.querySelector(".error");
async function weatherCall(city) {
  // `&q=${city}`
  const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (respone.status == 400) {
    errorMsg.innerHTML = "Enter city name";
    errorMsg.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  if (respone.status == 404) {
    errorMsg.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await respone.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Couds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0] == "Snow") {
      weatherIcon.src = "./images/snow.png";
    } else if (data.weather[0] == "Mist") {
      document.querySelector(".weather-icon").innerHTML = "./images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    errorMsg.style.display = "none";
  }

  if (SearchInp === " ") {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Enter the city name";
  }
}
Searchbtn.addEventListener("click", () => {
  let city = SearchInp.value;
  weatherCall(city);
});
