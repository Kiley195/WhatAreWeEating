const body = document.querySelector("body");
const message = document.createElement("p");


//function to redirect 
let redirectUrl = '';
const redirectPage = function (url){
    redirectUrl = url;
    location.assign(url)
}



document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the recipe data from localStorage
    const recipeData = JSON.parse(localStorage.getItem("recipeData"));

    if (recipeData) {
        // Create elements to display the recipe
        const container = document.getElementById("recipe-container");

        const titleEl = document.createElement("h2");
        titleEl.textContent = recipeData.Title;

        const ingredientsEl = document.createElement("p");
        ingredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipeData.Ingredients}`;

        const preparationEl = document.createElement("p");
        preparationEl.innerHTML = `<strong>Preparation:</strong> ${recipeData.Preparation}`;

        // Append elements to the container
        container.appendChild(titleEl);
        container.appendChild(ingredientsEl);
        container.appendChild(preparationEl);
    } else {
        console.error("No recipe data found in localStorage.");
    }
});


