import WeatherEditorForm from '../components/WeatherEditorForm'
import { connect } from 'react-redux'
import { WeatherEditorAdd } from '../actions'

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onSubmit : (title) =>{
             dispatch(WeatherEditorAdd(title))
        }
    }
}

let WeatherEditor = connect(null, mapDispatchToProps)(WeatherEditorForm)

export default WeatherEditor