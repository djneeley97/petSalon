let salon={
    name:"Pawm Leaf Salon",
    phone:"999-999-9999",
    address:{
        street:"Pawm",
        number:"262-K",
        zip:"91913",
    },
    pets:[] //array
}
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
}

displayFooterInfo();