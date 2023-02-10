import { View } from './View.js';

class RecipesView extends View {
  containerEl = document.querySelector('.recipes-list');

  generateHtml(recipeData) {
    const data = recipeData[0];
    if(!data) return
    console.log(data);
    return `
    <li>
    <div class="recipe-box">
      <h5>${data.name}</h5>
      <span class="">(${data.calories}Calories</span>
      <span class="">${data.proteins}Protein</span>
      <span class="">${data.carbohydrates}Carbs</span>
      <span class="">${data.fats}Fat)</span>
      <span class="hidden">Ingredients [${data.ingredients.map(item=>item)}]</span>
      </div>
  </li>

`;
  }
}

export default new RecipesView();
