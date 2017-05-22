export const ChangeTitle =(title) => ({
    type:'CHANGE_TITLE',
    title
})

export const WeatherDisplayUpdate =({temp, name, windspeed, winddegree}) => ({
    type:'ADD_WEATHERDISPLAYDETAILS',
    temp,
    name,
    windspeed,
    winddegree
})
