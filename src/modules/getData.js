const getWeather = async () => {
    const res = await fetch(" http://api.weatherapi.com/v1/current.json?key=0804b0f642fd40ccb16202934232209&q=mendoza")
    const json = await res.json()
    console.log(json)
}

export { getWeather }
