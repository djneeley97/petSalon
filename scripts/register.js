//constructor
function Pet(n,a,g,t,b,s,r){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.typeOfAnimal=t;
    this.breed=b;
    this.service=s;
    this.restrictions=r;
}

function getE(id){
    return document.getElementById(id);
}
//get elements from HTML
let inputName= getE("txtName");
let inputAge= getE("txtAge");
let inputGender= getE("txtGender");
let inputTypeOfAnimal= getE("txtTypeOfAnimal");
let inputBreed= getE("txtBreed");
let inputService= getE("txtService");
let inputRestrictions= getE("txtRestrictions")

function isValid(aPet){
    let validation=true;
    //clear the style
    //document.querySelectorAll("inputs");
    getE("txtName").classList.remove("alert-error");
    getE("txtGender").classList.add("alert-error");
    getE("txtTypeOfAnimal").classList.add("alert-error");
    getE("txtBreed").classList.add("alert-error");
    getE("txtService").classList.add("alert-error");
    getE("txtRestrictions").classList.add("alert-error");

    if(aPet.name==""){
        //the pet is not valid
        validation=false;
        getE("txtName").classList.add("alert-error");
    }
    if(aPet.gender==""){
        validation=false;
        getE("txtGender").classList.add("alert-error");
    }if(aPet.typeOfAnimal==""){
        validation=false;
        getE("txtType").classList.add("alert-error");
    }
    if(aPet.breed==""){
        validation=false;
        getE("txtBreed").classList.add("alert-error");
    }
    if(aPet.service==""){
        validation=false;
        getE("txtService").classList.add("alert-error");
    }if(aPet.restrictions==""){
        validation=false;
        getE("txtRestrictions").classList.add("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;
    
    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },3000);
}
function register(){
    //1)getting value
    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputTypeOfAnimal.value,inputBreed.value,inputService.value,inputRestrictions.value);
    console.log(newPet);

    if(isValid(newPet)==true){
        //3) push the newPet to the array
        salon.pets.push(newPet);
        //4) call display function
        displayPetCards();
        //5) clear the input
        inputName.value="";
        inputAge.value="";
        inputGender.value="";
        inputTypeOfAnimal.value="";
        inputBreed.value="";
        inputService.value="";
        inputRestrictions.value="";

        showNotifications("Successful registration","alert-success");
    }else{
        showNotifications("Please fill out all the required fields","alert-error");
    }
}

function init(){
    //creating predefined obj
    
    let pet3=new Pet("Speedy",70,"Male","Bird","Parrot","Grooming","None");
    let pet4=new Pet("Scooby",60,"Male","Dog","Hound","Vaccine","None");
    let pet5=new Pet("Scrappy",50,"Male","Cat","Maine Coon","Grooming","Fiesty");
    let pet6=new Pet("Nash",70,"Male","Dog","Golden","Check Up","None");
    salon.pets.push(pet3,pet4,pet5,pet6);
    //exacuting fn
    displayPetCards();
}
window.onload=init;// wait to render the HTML