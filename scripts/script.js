var globalVariable = "I'm in global scope";

function myFunction(){
    // this fucntion can access globalVariable
    console.log(globalVariable);
}

myFunction();

function myFunction2() {
    var localVariable = "I'm in local scope";
    console.log(localVariable);
} 
if (true){
    let blockVariable = "I'm in block scope";
    console.log(blockVariable);
}
// accessing blockVariable here would result in an error

myFunction2();

function planeTicket(destination,price){
    console.log("Traveling to ..." + destination);
    return price*1.11;
}

function calculateProfits(){
    var price1=planeTicket("Italy",100);
    var price2=planeTicket("Amsterdam",200);
    var price3=planeTicket("Barcelona",150);

    console.log(price1+price2+price3);
}

calculateProfits();