const permission = document.querySelector(".permission");
const positive = document.querySelector(".positive");
const negative = document.querySelector(".negative");
const error = document.querySelector(".error");

const API_KEY = "b585a674a8613d12661806e639357030"; //meter aquí la api key que consigues al registrate en https://openweathermap.org/api

// Esta función oculta todos los paneles
function hideAllPanels() {
  permission.classList.add("hidden");
  positive.classList.add("hidden");
  negative.classList.add("hidden");
  error.classList.add("hidden");
}

// Esta función recibe un panel y lo muestra
function showPanel(panel) {
  panel.classList.remove("hidden");
}

// Esta función me devuelve los datos en JSON de una URL
async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error cargando datos");
  const json = await response.json();
  return json;
}

// Esta función se ejecutará si va a llover
function showPositive(info) {
  hideAllPanels();
  showPanel(positive);
  positive.querySelector("p").innerHTML = `
    Ahora mismo hay ${info.temperature}ºC en <strong>${
    info.city
  }</strong> con ${info.weather} 
    y parece que ${
      info.nextRain > 0
        ? `<strong>SI lloverá</strong> dentro de ${info.nextRain} horas`
        : "está lloviendo ahora"
    }.
  `;
}

// Esta función se ejecutará si no va a llover
function showNegative(info) {
  hideAllPanels();
  showPanel(negative);
  negative.querySelector("p").innerHTML = `
    Ahora mismo hay ${info.temperature}ºC en <strong>${info.city}</strong> con ${info.weather} 
    y parece que <strong>NO lloverá</strong> en las próximas ${info.margin} horas.
  `;
}

// Esta función recibe lass coordenadas geográficas del usuario y busca que tiempo va a hacer
async function getLocationWeather(latitude, longitude) {
  try {
    // Sacamos información del tiempo actual
    const currentWeather = await getData(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`
    );

    // Sacamos información de las próximas horas
    const next = await getData(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,daily,alerts&appid=${API_KEY}&lang=es&units=metric`
    );

    const nextRainHour = next.hourly.findIndex((hour) => {
      return hour.weather[0].main === "Rain";
    });

    const rainMargin = 5;

    if (nextRainHour > -1 && nextRainHour < rainMargin) {
      showPositive({
        temperature: currentWeather.main.temp,
        city: currentWeather.name,
        weather: currentWeather.weather[0].description,
        nextRain: nextRainHour,
      });
    } else {
      showNegative({
        temperature: currentWeather.main.temp,
        city: currentWeather.name,
        weather: currentWeather.weather[0].description,
        margin: rainMargin,
      });
    }
  } catch (e) {
    console.error(e);
    hideAllPanels();
    showPanel(error);
  }
}

// Esta función detecta la localización del usuario
function getUserLocation() {
  hideAllPanels();

  navigator.geolocation.getCurrentPosition(
    (location) => {
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      localStorage.setItem("permission", "ok");

      getLocationWeather(latitude, longitude);
    },
    () => {
      showPanel(error);
      localStorage.removeItem("permission");
    }
  );
}

// Esta función se ejecuta al cargar la web
function main() {
  if (localStorage.getItem("permission") === "ok") {
    getUserLocation();
  } else {
    showPanel(permission);
    permission.querySelector("button").onclick = () => {
      getUserLocation();
    };
  }
}

main();
