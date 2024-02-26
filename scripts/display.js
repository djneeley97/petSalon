function displayPetNames(){
    getE('pets').innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
        getE('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    getE('totalPets').innerHTML=`Total=${salon.pets.length}`;
    
}

function displayPetCards(){
    let petList=readItems("petsDB");
    getE('pets').innerHTML="";
    let card="";
    for(let i=0;i<petList.length;i++){
        let pet = petList[i];
        card+=`
            <div id="${pet.id}" class="petCard">
                <p>Name: ${pet.name}</p>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Type of animal: ${pet.typeOfAnimal}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Restrictions: ${pet.restrictions}</p>
                <button class="btn btn-color me-md-2" onclick="deletePet(${pet.id})">Delete</button>
            </div>
        `;
    }
    getE('pets').innerHTML=card;
}
function displayPetTable(){
    
}