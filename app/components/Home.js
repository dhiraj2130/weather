
var React = require('react');
var Helper = require('../utils/helper');
import WeatherEditor from '../containers/WeatherEditorAddDetails';
import WeatherDisplay from './WeatherDisplay';

class Home extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount() {
        this.setState({
            temp:100
        })
        console.log(JSON.stringify(this.getState))
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position.coords.latitude)
            });
        } else {
            showError("Your browser does not support Geolocation!");
        }

        Helper.getWhetherInfo()
            .then(function(data){
                // this.setState({
                //     bio:data.bio,
                //     repos:data.repos
                // })
                console.log(JSON.stringify(data))
            }.bind(this))
  
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
                        <WeatherDisplay temperature={this.state.temp}  />
                    </div>


                </div>

            </div>
        )
    }
}

module.exports = Home
// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000
// })(HomeGeoLocated);