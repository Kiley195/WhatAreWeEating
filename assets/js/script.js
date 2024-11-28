// Initialize recipe storage
const recipeStorage = JSON.parse(localStorage.getItem('recipe')) || [];

// Recipe submission function
function recipeSubmission(event) {
    event.preventDefault();

    const Title = document.getElementById('title');
    const Ingredients = document.getElementById('Ingredients');
    const Preparation = document.getElementById('Preparation');

    const recipeCard = {
        Title: Title.value,
        Ingredients: Ingredients.value,
        Preparation: Preparation.value,
    };

    recipeStorage.push(recipeCard);
    localStorage.setItem('recipe', JSON.stringify(recipeStorage));

    Title.value = '';
    Ingredients.value = '';
    Preparation.value = '';

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    alert("Recipe Saved! 🎉");
}

// Attach recipe submission event listener
document.getElementById('recipe-form').addEventListener('submit', recipeSubmission);

// Event listener for the "Surprise Me" button click
document.getElementById('surprise').addEventListener('click', function () {
    const boomDiv = document.createElement('div');
    boomDiv.classList.add('boom-effect');
    document.body.appendChild(boomDiv);

    setTimeout(() => {
        boomDiv.remove();
    }, 1000);
});



