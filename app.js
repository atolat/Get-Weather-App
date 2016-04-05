//Main App
var weather= require('./weather.js');
var location= require('./location.js');

//setup yargs to have --location
var argv = require('yargs')
    .option('location',{
        alias: 'l',
        demand: false,
        describe: 'location to get weather for',
        type: 'string'
        
    })
    .help('help')
    .argv;


if(typeof argv.l === 'string' && argv.l.length > 0){
    weather(argv.l, function (currentWeather){
            console.log(currentWeather);
            });
    
}else{
    location(function(location){
    if(!location){
        console.log('Unable to get location');
        return;
    }
    weather(location.city, function(currentWeather){
        console.log(currentWeather+' (location guessed based on machine IP)');
    });    

});
}

