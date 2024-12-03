// Initialize recipe storage
const body = document.querySelector("body");
const surpriseButton = document.getElementById("surprise");
const message = document.createElement("p");


//Event listener for the "Surprise Me" button click
document.getElementById('surprise').addEventListener('click', function () {
    const boomDiv = document.createElement('div');
    boomDiv.classList.add('boom-effect');
    document.body.appendChild(boomDiv);

    setTimeout(() => {
        boomDiv.remove();
    }, 1000);
});

surpriseButton.addEventListener("click", function() {

    
        
if (recipeStorage.length > 0) {
    const randomRecipe = recipeStorage[Math.floor(Math.random() * recipeStorage.length)];
    localStorage.setItem("recipeData", JSON.stringify(randomRecipe));   
    location.assign("redirect.html");

}else {

    message.textContent=  "Looks like you have no recipes saved yet!"
    body.appendChild(message);
}

});




