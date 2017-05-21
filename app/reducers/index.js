import { combineReducers } from 'redux'
import weatherDisplay from './WeatherDisplay'
import weatherParameters from './WeatherParameters'

const appReducer = combineReducers({
    details:weatherDisplay,
    title:weatherParameters,
})

export default appReducer