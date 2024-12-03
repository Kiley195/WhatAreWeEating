
    // Function to perform search and update results

    const search = document.getElementById('search-button');
    search.addEventListener('click', performSearch);

      function performSearch() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase().split(',');
        const results=document.getElementById('results');
        results.innerHTML= '';

        let foundResults = false;

        for (let i = 0; i < recipeStorage.length; i++) {
          let recipeCard = recipeStorage[i];
          let recipeIngredients = recipeCard.Ingredients.toLowerCase();
      
          // Check if all search terms are found in the ingredients
          let matchFound = searchInput.every(input => recipeIngredients.includes(input.trim()));
          console.log('search input', searchInput);
          console.log('recipe storage', recipeStorage);

          //display matching recipes to search
          if (matchFound) {
            foundResults = true;
            let resultDiv = document.createElement('div');
            resultDiv.classList.add('card','recipe-card','shadow-sm');
            
            const collapseId = 'collapse-' + i;  // Use the index for uniqueness
            resultDiv.innerHTML = `
              <div class="card-header bg-primary text-white" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                <h5 class="card-title mb-0">${recipeCard.Title}</h5>
              </div>
              <div id="${collapseId}" class="collapse">
                <div class="card-body">
                  <p><strong>Ingredients:</strong><br>${recipeCard.Ingredients}</p>
                  <p><strong>Preparation:</strong><br>${recipeCard.Preparation}</p>
                </div>
              </div>
            `;

            results.appendChild(resultDiv);
           }
        }
        //display if no results are found
       if (!foundResults){
        results.innerHTML= `<p>Sorry, no recipes match your search</p>`;
       }
      }