export const WeatherEditorAdd =(title) => ({
    type:'ADD_WEATHERDETAILS',
    title
})

export const WeatherDisplayUpdate =({temp,name}) => ({
    type:'ADD_WEATHERDISPLAYDETAILS',
    temp,
    name
})
