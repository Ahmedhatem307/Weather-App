const display = document.querySelector("#dis-temp");

function extracting_data(data) {
    if (document.querySelector("#fahr").checked) {
        display.innerHTML = data.currentConditions.temp
    } else {
        celsius(data.currentConditions.temp);
    }
}

function celsius(fahr) {
    display.innerHTML = Math.round((fahr - 32) * (5 / 9));
}

async function get_weather_data(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=9HMH4KQN2L8F9DNCS7VT2DLLW&contentType=json`;
    try {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.json();
        extracting_data(data);
    }
    catch (error) {
        console.error(error.message);
    }
}

const submit_btn = document.querySelector("#btn1");
submit_btn.addEventListener("click", () => {

    const city = document.querySelector("#location");
    get_weather_data(city.value);

    event.preventDefault();
})

