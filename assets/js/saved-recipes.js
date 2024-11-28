// Fetch recipes from localStorage
const recipeStorage = JSON.parse(localStorage.getItem('recipe')) || [];

// Reference to the container where recipes will be displayed
const recipeList = document.getElementById('recipe-list');

// Function to render the recipes on the page
function renderRecipes() {
    recipeList.innerHTML = ''; // Clear the container

    if (recipeStorage.length === 0) {
        // Display a message if there are no recipes
        recipeList.innerHTML = `<p class="no-recipes">No recipes found. Add some recipes to see them here!</p>`;
        return;
    }

    // Loop through the recipes and create Bootstrap collapsible cards for each
    recipeStorage.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

        recipeCard.innerHTML = `
            <div class="card recipe-card shadow-sm">
                <div class="card-header bg-primary text-white" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="false" aria-controls="collapse-${index}">
                    <h5 class="card-title mb-0">${recipe.Title}</h5>
                </div>
                <div id="collapse-${index}" class="collapse">
                    <div class="card-body">
                        <p><strong>Ingredients:</strong><br>${recipe.Ingredients}</p>
                        <p><strong>Preparation:</strong><br>${recipe.Preparation}</p>
                    </div>
                    <div class="card-footer text-center">
                        <button class="btn btn-danger btn-sm" onclick="deleteRecipe(${index})">Delete Recipe</button>
                    </div>
                </div>
            </div>
        `;

        recipeList.appendChild(recipeCard);
    });
}

// Function to delete a recipe
function deleteRecipe(index) {
    // Remove the recipe from the storage array
    recipeStorage.splice(index, 1);
    // Update localStorage
    localStorage.setItem('recipe', JSON.stringify(recipeStorage));
    // Re-render the recipes
    renderRecipes();
}

// Render the recipes when the page loads
renderRecipes();
