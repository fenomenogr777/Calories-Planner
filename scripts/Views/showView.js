import { View } from './View.js';

class ShowView extends View {
  containerEl = document.querySelector('.nutrition-list');
  updateBtn = document.querySelector('.update-show');
  showBtn = document.querySelector('.btn-add');
  data;

  removeHidden(){
    document.querySelector(".section-nutrition-data").classList.remove("hidden")
  }

  clickedAddMeal(handler) {
    this.showBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.show-input').value = '';
      handler();
    });
  }

  clickedUpdateData(handler) {
    this.updateBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const inputEl = document.querySelector('.show-input').value;
      handler(+inputEl);
    });
  }

  render(data) {
    this.data = data;

    const markUp = this.generateHtml(data);
    this.clear();
    this.containerEl.insertAdjacentHTML('afterbegin', markUp);
  }

  generateHtml(data) {
    return `  <h3>Serving <span>${data.servingSize}gr</span> of <span class="nutrition-value">${data.name}</span></h3>
    <li class="nutrition-item"><span>Calories</span> <span class="nutrition-value">${data.calories}</span></li>
    <li class="nutrition-item"> <span>Protein</span> <span class="nutrition-value">${data.protein}</span> </li>
    <li class="nutrition-item"><span>Carbohydrate</span> <span class="nutrition-value">${data.carbohydrate}</span></li>
    <li class="nutrition-item"><span>Fat</span> <span class="nutrition-value">${data.fat}</span></li>`;
  }
}

export default new ShowView();
