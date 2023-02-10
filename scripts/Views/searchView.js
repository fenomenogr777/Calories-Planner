import { View } from './View.js';

class SearchView extends View {
  btnEL = document.querySelector('.btn-search');
  form = document.querySelector('.form-search');

  clickedSearch(handler) {
    console.log(
    View.prototype)
    this.form.addEventListener('click', function (e) {
      e.preventDefault();
      const clicked = e.target.closest('.btn-search');
      if (!clicked) return;
      document.querySelector('.show-input').focus()
      const inputEL = document.querySelector('.search-input');
      const query = inputEL.value;
      if (!query) return;
      inputEL.value = '';
      handler(query);
    });
  }
}

export default new SearchView();
