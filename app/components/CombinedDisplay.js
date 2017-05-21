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
                console.log(position.coords.latitude)

                Helper.getWhetherInfo()
                    .then(function(data){
                        console.log(JSON.stringify(data))
                        this.props.onUpdate({temp:data.report.main.temp, name:'dhiraj'});
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
                        <WeatherDisplay title={this.props.title.title} temp={this.props.temp} name={this.props.name}/>
                    </div>


                </div>

            </div>
        )
    }
}

export default CombinedDisplay
