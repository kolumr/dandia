var tripCost = 0;
var passengers = 1;
var locationScale = 1
function caculatePrice(passengers, locationScale){
    var price;
    if(locationScale===1)
     price = 500;
    else 
     price = 700;

     tripCost = Math.ceil(price/passengers);
    
}
function getData(){
    $("#reserve").click(function () {
        $('#booked').modal('show')
})
}

function getDriver(){
    $("#reserved").click(function () {
        $('#booked1').modal('show')
})
}
