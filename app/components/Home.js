
var React = require('react');
var Helper = require('../utils/helper');
import {geolocated} from 'react-geolocated';
import WeatherEditor from '../containers/WeatherEditorAddDetails';

class HomeGeoLocated extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
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
        // navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         var initialPosition = JSON.stringify(position);
        //         this.setState({initialPosition});
        //         console.log(initialPosition);
        //     },
        //     (error) => alert(JSON.stringify(error)),
        //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        // );
        // this.watchID = navigator.geolocation.watchPosition((position) => {
        //     var lastPosition = JSON.stringify(position);
        //     this.setState({lastPosition});
        // });
    }

    render(){
        return(
            <div>
            <h2 className="text-center">
                         Weather Editor and component Page
                {"hello"}

            </h2>

                <div className="row">
                <div className="col-md-3">
                    <WeatherEditor />
                </div>

                </div>

            </div>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000
})(HomeGeoLocated);