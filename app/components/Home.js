
var React = require('react');
import WeatherEditor from '../containers/WeatherEditorAddDetails';

var Home = React.createClass({
    render: function(){
        return(
            <div>
            <h2 className="text-center">
                         Weather Editor and component Page
            </h2>
                <div className="row">
                <div className="col-md-3">
                    <WeatherEditor />
                </div>
                    
                </div>
                </div>
        )
    }
});

module.exports = Home;