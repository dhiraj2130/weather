/**
 * Created by dhiraj.kumar on 17/02/2017.
 */
var axios = require('axios');


function getRepos(username){
    "use strict";
    return axios.get('https://api.github.com/users/'+username+'/repos');
};

function getUserInfo(username){
    "use strict";
    return axios.get('https://api.github.com/users/'+username);
};

var helpers = {
    getGitHubInfo : function(username){
        "use strict";
        return axios.all([getRepos(username),getUserInfo(username)])
            .then(function(arr){
                return {
                    repos : arr[0].data,
                    bio : arr[1].data
                }
            });
    }
};

module.exports = helpers;
