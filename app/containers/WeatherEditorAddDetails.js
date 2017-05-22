import WeatherEditorForm from '../components/WeatherEditorForm'
import { connect } from 'react-redux'
import { ChangeTitle } from '../actions'

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onChangeTitle : (title) =>{
             dispatch(ChangeTitle(title))
        }
    }
}

const mapStateToProps = (state) => {
    "use strict";
    return {
        title : state.title,
        unit : state.unit,
        wind : state.wind
    }
}

let WeatherEditor = connect(mapStateToProps, mapDispatchToProps)(WeatherEditorForm)

export default WeatherEditor