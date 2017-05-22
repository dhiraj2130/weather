import React from 'react'


var Helper = require('../utils/helper');
import WeatherEditor from '../containers/WeatherEditorAddDetails';
import WeatherDisplay from './WeatherDisplay';

class CombinedDisplay extends React.Component {
    constructor(props){
        super(props)
        this.getTemparatureInfo = this.getTemparatureInfo.bind(this);

    }
    componentWillMount() {
        // this.setState({
        //     temp:101
        // })
        // console.log(JSON.stringify(this.getState))
        this.getTemparatureInfo(this.props.unit);

    }
    componentWillReceiveProps(nextProps){
        console.log("this.props.unit " +nextProps.unit);
        this.getTemparatureInfo(nextProps.unit);

    }

    getTemparatureInfo(unit){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                Helper.getWhetherInfo(position.coords.latitude, position.coords.longitude, unit)
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
                    <div className="col-md-6">
                        <WeatherEditor />

                    </div>
                    <div className="col-md-6">
                        <WeatherDisplay title={this.props.title}
                                        temp={this.props.temp}
                                        windspeed={this.props.windspeed}
                                        winddegree={this.props.winddegree}
                                        name={this.props.name}
                                        unit={this.props.unit}
                        />
                    </div>


                </div>

            </div>
        )
    }
}

export default CombinedDisplay
