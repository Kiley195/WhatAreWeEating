const saveButton = document.getElementById('submit');
const formEl = document.querySelector('form');
const recipeStorage = JSON.parse(localStorage.getItem('recipe')) || [];

// Function to show the confetti animation
function showConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';

    document.body.appendChild(confettiContainer);

    // Use a library like Canvas Confetti for better effects
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        } else {
            document.body.removeChild(confettiContainer);
        }
    })();
}

// Function to show the modal window
function showModal() {
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.zIndex = '10000';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.innerHTML = `
        <p>Recipe saved successfully!</p>
        <button id="closeModal" style="margin-top: 10px; padding: 5px 10px;">Close</button>
    `;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.zIndex = '9999';

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Close the modal when the button is clicked
    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
    });
}

function recipeSubmission(event) {
    event.preventDefault();

    const Title = document.getElementById('title');
    const Ingredients = document.getElementById('Ingredients');
    const Preparation = document.getElementById('Preparation');

    const recipeCard = {
        Title: Title.value.split(',').map(item => item.trim()),
        Ingredients: Ingredients.value.split(',').map(item => item.trim()),
        Preparation: Preparation.value.split(',').map(item => item.trim()),
    };

    recipeStorage.push(recipeCard);
    localStorage.setItem('recipe', JSON.stringify(recipeStorage));

    Title.value = '';
    Ingredients.value = '';
    Preparation.value = '';

    // Trigger confetti and show the modal
    showConfetti();
    showModal();
}

formEl.addEventListener('submit', recipeSubmission);
