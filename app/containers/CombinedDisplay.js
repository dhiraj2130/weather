import CombinedDisplay from '../components/CombinedDisplay'
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
const mapStateToProps = (state) => {
    "use strict";
    console.log(state.title);
    return {
        title : state.title
    }
}

let CombinedDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(CombinedDisplay)

export default CombinedDisplayContainer