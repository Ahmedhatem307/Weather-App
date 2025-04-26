

async function get_weather_data(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=9HMH4KQN2L8F9DNCS7VT2DLLW&contentType=json`;
    try {
        const response = await fetch(url, { mode: "cors" })
        const json = response.json();
        console.log(json);
    }
    catch {

    }
}

async function api_hit(url) {

}

get_weather_data("London");
//api_hit(url);