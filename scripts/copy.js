//constructor
function Pet(n,a,g,b,s,r){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.restrictions=r;
} 

function getE(id){
    return document.getElementById(id);
}
// get elements from HTML
let inputName= document.getE("txtName");
let inputAge= document.getE("txtAge");
let inputGender= document.getE("txtGender");
let inputBreed= document.getE("txtBreed");
let inputService= document.getE("txtService");
let inputType= document.getE("txtType");
let inputRestrictions= document.getE("txtRestrictions");


function isValid(aPet){
    let validation=true;
    //clear the style
    //document.querySelectorAll('input')
    getE("txtName").classList.remove("alert-error");
    getE("txtAge").classList.remove("alert-error");
    getE("txtGender").classList.remove("alert-error");
    getE("txtBreed").classList.remove("alert-error");
    getE("txtService").classList.remove("alert-error");

    if(aPet.name==""){
        //the pet is not valid
        validation=false;
        getE("txtName").classList.add("alert-error")
    }
    if(aPet.age==""){
        //the pet is not valid
        validation=false;
        getE("txtAge").classList.add("alert-error")
    }
    if(aPet.gender==""){
        //the pet is not valid
        validation=false;
        getE("txtGender").classList.add("alert-error")
    }
    if(aPet.breed==""){
        //the pet is not valid
        validation=false;
        getE("txtBreed").classList.add("alert-error")
    }
    if(aPet.service==""){
        //the pet is not valid
        validation=false;
        getE("txtService").classList.add("alert-error")
    }
    if(aPet.restrictions==""){
        //the pet is not valid
        validation=false;
        getE("txtRestrictions").classList.add("alert-error")
    }
    return validation;
}

function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${msg}">${type}</p>`

    setTimeout(function(){
        getE("notifications").classList.remove("hidden");
    },3000);
}
function register(){
    //1) getting value
    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    console.log(newPet);

    if(isValid(newPet)==true){
        //3) push the newPet to the array
        salon.pets.push(newPet);
        //4) call display function
        displayPetNames();
        //5) clear the input
        inputName.value="";
        inputAge.value="";
        inputGender.value="";
        inputBreed.value="";
        inputService.value="";
        inputType.value="";

        showNotifications("Success","alert-success")
    }else{
        showNotifications("Please fill out all the required fields","alert-error");
    }
}

function init(){
    //creating predefined obj

    let pet1=new Pet("Scooby",60,"Male","M","grooming","dog");
    let pet2=new Pet("Scrapy",50,"Male","F","vaxination","cat");
    let pet3=new Pet("Speedy",70,"Male","M","check-up","bird");
    salon.pets.push(pet1,pet2,pet3);
    //exacuting fn
    displayPetCards();
}
window.onload=init; //wait to render the HTML