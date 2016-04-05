function printInTwoSeconds(message){
    setTimeout(function(){
        console.log(message);
    },2000
    )
};

var message="Hello";
printInTwoSeconds(message);

