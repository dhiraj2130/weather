
var axios = require('axios');


function getWhether(lat, lon, unit){
    let apikey = '105d98bfbd75e4f8fd97dab7e5ca5912';

    let unit_ = unit === 'C' ? 'metric' : 'imperial';
    console.log(" unit = "+unit_);

    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${unit_}`);
};



var helpers = {
    getWhetherInfo : function(lat, lon, unit){
        "use strict";
        return axios.all([getWhether(lat, lon, unit)])
            .then(function(arr){
                return {
                    report : arr[0].data,

                }
            });
    }
};

module.exports = helpers;
