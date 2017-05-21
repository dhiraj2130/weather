
var axios = require('axios');


function getWhether(lat, lon){
    "use strict";
    return axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=105d98bfbd75e4f8fd97dab7e5ca5912`);
};



var helpers = {
    getWhetherInfo : function(lat, lon){
        "use strict";
        return axios.all([getWhether(lat, lon)])
            .then(function(arr){
                return {
                    report : arr[0].data,

                }
            });
    }
};

module.exports = helpers;
