export class View {

  spinner() {
    this.clear();
    const markUp = `<div class="spinner"></div>`;
 this.containerEl.insertAdjacentHTML('afterbegin', markUp);
  }

  clear() {
    this.containerEl.textContent = '';
  }

  render(data) {
    const markUp = this.generateHtml(data);
    this.containerEl.insertAdjacentHTML('afterbegin', markUp);
  }


}
