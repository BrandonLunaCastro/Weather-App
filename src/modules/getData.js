const getWeeklyForecast = async (location = "mendoza") => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0804b0f642fd40ccb16202934232209&days=7&q=${location}`);
    const json = await res.json();
    return {
        weekly: json.forecast.forecastday,
    };
};
const getDailyForecast = async (location = "mendoza") => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0804b0f642fd40ccb16202934232209&q=${location}`);
    const json = await response.json();
    return {
        location: json.location,
        hour: json.forecast.forecastday[0].hour,
        day: json.forecast.forecastday[0].day,
        currentWeather: json.current,
    };
};

export { getWeeklyForecast, getDailyForecast };
