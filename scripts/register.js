let salon={
    name:"Pawm Leaf Salon",
    phone:"999-999-9999",
    address:{
        street:"Pawm",
        number:"262-K",
        zip:"91913",
    }
    pets:[
        {
            name:"Scooby",
            age:60
        },
        {
            name:"Scrappy",
            age:50
        },
        {
            name:"Tweety bird",
            age:80
        }
    ] //pets array
}

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

//use for a loop to travel the array

function displayFooterInfo(){

    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} our location is ${salon.address.street}${salon.address.number}${salon.address.zip}</p>
    `;

}
displayFooterInfo();