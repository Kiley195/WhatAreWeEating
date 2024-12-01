

// Fetch recipes from localStorage
const recipeStorage = JSON.parse(localStorage.getItem('recipe')) || [];
const randomRecipeContainer = document.getElementById('random-recipe-container');
const newRecipeBtn = document.getElementById('new-recipe-btn');
const loadingSpinner = document.querySelector('.loading-spinner');

// Function to display a random recipe
function displayRandomRecipe() {
    if (recipeStorage.length === 0) {
        randomRecipeContainer.innerHTML = `<p class="text-danger fs-4">No recipes found! Please add some recipes first.</p>`;
        newRecipeBtn.style.display = "none"; // Hide the button if no recipes are available
        return;
    }

    // Add fade-out animation
    randomRecipeContainer.classList.add('fade-out');

    // Simulate a delay for the loading spinner
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * recipeStorage.length);
        const randomRecipe = recipeStorage[randomIndex];

        // Populate the random recipe
        randomRecipeContainer.innerHTML = `
            <div class="accordion" id="recipeAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            ${randomRecipe.Title}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#recipeAccordion">
                        <div class="accordion-body">
                            <p><strong>Ingredients:</strong><br>${randomRecipe.Ingredients}</p>
                            <p><strong>Preparation:</strong><br>${randomRecipe.Preparation}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Remove fade-out and add fade-in animation
        randomRecipeContainer.classList.remove('fade-out');
        randomRecipeContainer.classList.add('fade-in');

        // Hide the loading spinner
        loadingSpinner.style.display = 'none';
    }, 500);

    // Show the loading spinner
    loadingSpinner.style.display = 'block';
}

// Event listener for "Surprise Me Again" button
newRecipeBtn.addEventListener('click', displayRandomRecipe);

// Initial display when the page loads
displayRandomRecipe();
