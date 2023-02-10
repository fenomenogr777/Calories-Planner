import { View } from './View.js';

class RecipesView extends View {
  containerEl = document.querySelector('.recipes-list');

  clickDelete(handler) {
    this.containerEl.addEventListener('click', function (e) {
      const clicked = e.target.closest('.recipe-delete');
      if (!clicked) return;
      const id = e.target.closest('.recipe-list').getAttribute('id');
      e.target.closest('.recipe-list').remove();
      handler(id);
    });
  }
  clickDeleteAll(handler) {
    document.querySelector(".recipes-box").addEventListener('click', function (e) {
      const clicked = e.target.closest('.recipes-deleteAll');
      if (!clicked) return;
      document.querySelector(".recipes-list").innerHTML=""
      handler()
    });
  }

  generateHtml(recipeData) {
    const data = recipeData[0];
    if (!data) return;
    return `
    <li class="recipe-list" id="${data.id}" >
    <div class="recipe-box">
      <h5>${data.name}</h5>
      <span class="">(${data.calories}Calories</span>
      <span class="">${data.proteins}Protein</span>
      <span class="">${data.carbohydrates}Carbs</span>
      <span class="">${data.fats}Fat)</span>
      <span>Ingredients(click to view)</span><span class="recipe-ingred  hidden" >[${data.ingredients.map(
        item => item
      )}]</span>
      <button class="recipe-delete" ><ion-icon class="meal-delete-icon" name="close-outline"></ion-icon></button>
      </div>
  </li>

`;
  }
}

export default new RecipesView();
