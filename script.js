
function extracting_data(data) {
    console.log("hello");
    //const data = JSON.parse(json_data);
    celsius(data.currentConditions.temp);
}

function celsius(fahr) {
    console.log(Math.round((fahr - 32) * (5 / 9)));
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




get_weather_data("London");
