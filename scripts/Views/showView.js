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
    return `<h3>${data.servingSize} gr of ${data.name}</h3>
    <li class="nutrition-item">
    ${data.calories} Calories</li>
    <li class="nutrition-item"> ${data.protein} Protein</li>
    <li class="nutrition-item"> ${data.carbohydrate} Carbs</li>
    <li class="nutrition-item"> ${data.fat} Fat</li>`;
  }
}

export default new ShowView();
