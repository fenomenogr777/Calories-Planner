class ShowView {
  listContainer = document.querySelector('.nutrition-list');

  spinner() {
    this.clear();
    const markUp = `<ion-icon name="hourglass-outline"></ion-icon>`;
    this.listContainer.insertAdjacentHTML('afterbegin', markUp);
  }

  clear() {
    this.listContainer.textContent = '';
  }

  renderHtml(data) {
    console.log(data);
    const markUp = `
    <p>Per 100 gram</p>
    <li class="nutrition-item">
    ${data.calories.toFixed(1)}</li>
    <li class="nutrition-item">${data.protein.toFixed(1)}</li>
    <li class="nutrition-item">${data.carbohydrate.toFixed(1)}</li>
    <li class="nutrition-item">${data.fat.toFixed(1)}</li>
 `;
    this.clear();
    this.listContainer.insertAdjacentHTML('afterbegin', markUp);
  }
}

export default new ShowView();
