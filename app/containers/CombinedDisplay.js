import CombinedDisplay from '../components/CombinedDisplay'
import { connect } from 'react-redux'
import { WeatherDisplayUpdate } from '../actions'

const mapDispatchToProps = (dispatch) => {
    "use strict";
    return {
        onUpdate : (temp) =>{
            dispatch(WeatherDisplayUpdate(temp))
        }
    }
}
const mapStateToProps = (state) => {
    "use strict";
    console.log(state.temp);
    return {
        temp : state.temp,
        title : state.title,
    }
}

let CombinedDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(CombinedDisplay)

export default CombinedDisplayContainer