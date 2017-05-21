import React from 'react'


var Helper = require('../utils/helper');
import WeatherEditor from '../containers/WeatherEditorAddDetails';
import WeatherDisplay from './WeatherDisplay';

class CombinedDisplay extends React.Component {
    constructor(props){
        super(props)

    }
    componentWillMount() {
        // this.setState({
        //     temp:101
        // })
        // console.log(JSON.stringify(this.getState))
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                Helper.getWhetherInfo(position.coords.latitude,position.coords.longitude)
                    .then(function(data){
                        console.log(JSON.stringify(data))
                        this.props.onUpdate({temp:data.report.main.temp, name:data.report.name,
                            windspeed:data.report.wind.speed, winddegree:data.report.wind.deg});
                    }.bind(this))
            });
        } else {
            showError("Your browser does not support Geolocation!");
        }
    }

    componentDidMount() {

        console.log("hi"+JSON.stringify(this.props));

    }
    render(){
        return(
            <div>
                <h2 className="text-center">
                    Weather Editor and component Page
                </h2>

                <div className="row">
                    <div className="col-md-3">
                        <WeatherEditor />

                    </div>
                    <div className="col-md-3 col-md-3">
                        <WeatherDisplay title={this.props.title.title} temp={this.props.temp}
                                        windspeed={this.props.windspeed} winddegree={this.props.winddegree}
                                        name={this.props.name}/>
                    </div>


                </div>

            </div>
        )
    }
}

export default CombinedDisplay
