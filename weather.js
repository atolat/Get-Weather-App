//Get current location weather.
  var request= require('request');
module.exports = function(location,callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodedLocation+'&appid=b5e59920697bf01fa8f1fb52f8e5bf85&units=imperial';
    
    if(!location){
        return callback('No location provided');
    }
        request({
        url: url,
        json: true
    }, function(error,response,body){
        if(error){
            callback("Unable to fetch weather.");
        } else{
            callback('The temperature in ' +body.name+ ' is: ' +body.main.temp);
        }
    });
    };