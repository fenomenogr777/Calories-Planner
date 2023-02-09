import { View } from './View.js';

class ExtractView extends View {
  containerEl = document.querySelector('.meals-list');
  containerElTotal = document.querySelector('.meals-total-list');

  clickDelete(handler) {
    this.containerEl.addEventListener('click', function (e) {
      const clicked = e.target.closest('.btn-meal');
      if (!clicked) return;
      const id = clicked.closest('.meal').getAttribute('id');
      clicked.closest(".meal").remove()
      console.log(id);
      handler(+id);
    });
  }

  removeHidden() {
    document.querySelector('.section-meals').classList.remove('hidden');
  }

  renderTotal(data) {
    const markUp = this.generateHtmlTotal(data);
    this.containerElTotal.innerText = '';
    this.containerElTotal.insertAdjacentHTML('afterbegin', markUp);
  }
  generateHtmlTotal(data) {
    const totalCalories = data.reduce(
      (accum, curr) => accum + curr.calories,
      0
    );
    const totalProteins = data.reduce((accum, curr) => accum + curr.protein, 0);
    const totalCarbs = data.reduce(
      (accum, curr) => accum + curr.carbohydrate,
      0
    );
    const totalFats = data.reduce((accum, curr) => accum + curr.fat, 0);

    console.log(totalCalories);
    return `<li class="meal-total"><span>Calories:${totalCalories}</span></li>
  <li class="meal-total"><span>Proteins: ${totalProteins}</span></li>
  <li class="meal-total"><span>Carbohynadres:${totalCarbs}</span></li>
  <li class="meal-total"><span>Fats: ${totalFats}</span></li>`;
  }

  generateHtml(data) {
    return `
        <li class="meal" id="${data.id}">
        <ion-icon class="meal-check-icon" name="checkmark-outline"></ion-icon>
        <h3>${data.servingSize}g ${data.name}</h3>
        <div>
        <span class="meal">Calories:${data.calories}</span>
        <span class="meal">Protein:${data.protein}</span>
        <span class="meal">Carbs:${data.carbohydrate}</span>
        <span class="meal">Fat:${data.fat}</span>
        </div>
        <button class="btn-meal"><ion-icon class="meal-delete-icon" name="close-outline"></ion-icon></button>
        </li>`;
  }
}

export default new ExtractView();
