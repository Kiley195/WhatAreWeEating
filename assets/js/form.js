const saveButton = document.getElementById ('submit');
const formEl = document.querySelector('form');
const recipeStorage = JSON.parse(localStorage.getItem('recipe')) || [];

function recipeSubmission(event){
    event.preventDefault();

    const Title = document.getElementById('title');
    const Ingredients = document.getElementById('Ingredients');
    const Preparation = document.getElementById('Preparation');

    const recipeCard = {
        Title: Title.value.split(',').trim,
        Ingredients: Ingredients.value.split(',').trim,
        Preparation: Preparation.value.split(',').trim,
    };

    recipeStorage.push(recipeCard);
    localStorage.setItem('recipe', JSON.stringify(recipeStorage));

    Title.value = '';
    Ingredients.value = '';
    Preparation.value = '';

}

formEl.addEventListener('submit', recipeSubmission);