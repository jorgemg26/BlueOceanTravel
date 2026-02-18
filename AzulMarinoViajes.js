//We get the elements of the main section
let mainImage = document.getElementById("mainImage");
let mainTitle = document.getElementById("mainTitle");
let mainDescription = document.getElementById("mainDescription");

//We get the cards
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

//If the user clicks card1
card1.addEventListener("click", function (){
    mainImage.src = "beach.jpg";
    mainTitle.innerText = "Welcome to the beach";
    mainDescription.innerText = "Crystal clear water and relaxing views";
});

//If the user clicks card2
card2.addEventListener("click", function (){
    mainImage.src = "kayak.jpeg";
    mainTitle.innerText = "Welcome to kayak adventure";
    mainDescription.innerText = "Enjoy nature from the water";
});

//If the user clicks card3
card3.addEventListener("click", function (){
    mainImage.src = "mountain.jpg";
    mainTitle.innerText = "Welcome to mountain escape";
    mainDescription.innerText = "Fresh air and amazing landscapes";
});