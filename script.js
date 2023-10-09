var destinationForm= document.querySelector("#destination_details_form");
destinationForm.addEventListener('submit',handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    //extract value from each form field
    //event.target is the form
    var destName= event.target.elements["name"].value;
    var destLocation=event.target.elements["location"].value;
    var destPhoto = event.target.elements["photo"].value;
    var destDesc = event.target.elements["description"].value;
    //clear out form fields
    for(var i=0;i<destinationForm.length;i++){
        destinationForm.elements[i].value='';
    }
    
    //run a function that creates  a new card
    var destinationCard = createDestinationCard(destName,destLocation,destPhoto,destDesc);
    var wishListContainer = document.querySelector('#destinations_container');
    if(wishListContainer.children.length === 0){
        document.querySelector("#title").innerHTML= "My wish list";}
    //change image
    document.querySelector('#destinations_container').appendChild(destinationCard);
}
function createDestinationCard(name,location,photoUrl,desc){
        var card = document.createElement('div');
        card.className='card';
        var img= document.createElement('img');
        img.setAttribute('alt',name);
        var constantPhotoUrl = 'images/signpost.jpg';
        if(photoUrl.length === 0)
        {
            img.src = constantPhotoUrl;
        }
        else{
            img.src = photoUrl;
        }
        card.appendChild(img);
        var cardbody = document.createElement('div');
        cardbody.className= 'card-body';

        var cardTitle= document.createElement("h3");
        cardTitle.innerText = name;
        cardbody.appendChild(cardTitle);

        var cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardbody.appendChild(cardSubtitle);
        if(desc.length!=0){
            var cardText = document.createElement("p");
            cardText.className= "card-text";
            cardText.innerText=desc;
            cardbody.appendChild(cardText);
        }
        var cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove";

        cardDeleteBtn.addEventListener('click',removeDestination);
        cardbody.appendChild(cardDeleteBtn);
        card.appendChild(cardbody);
        return card;
        
}
function removeDestination(event){
    var card= event.target.parentElement.parentElement;
    card.remove();
}