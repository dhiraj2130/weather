export const WeatherEditorAdd =(title) => ({
    type:'ADD_WEATHERDETAILS',
    title
})

export const WeatherDisplayUpdate =({temp, name, windspeed, winddegree}) => ({
    type:'ADD_WEATHERDISPLAYDETAILS',
    temp,
    name,
    windspeed,
    winddegree
})
