class SearchView {
  btnEL = document.querySelector('.btn-search');
  form = document.querySelector('.form-search');

  clicked(handler) {
    this.form.addEventListener('click', function (e) {
      e.preventDefault();
      const clicked = e.target.closest('.btn-search');
      if (!clicked) return;
      const inputEL = document.querySelector('.search-input');
      const query = inputEL.value;
      if (!query) return;
      inputEL.value = '';
      handler(query);
    });
  }
}

export default new SearchView();
