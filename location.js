//Fetch users location based on ip address

var url = 'http://ipinfo.io';
var request= require('request');

module.exports = function(callback) {
    
        request({
        url: url,
        json: true
    }, function(error,response,body){
        if(error){
            callback({});
        } else{
            callback(body);
        }
    });
    };