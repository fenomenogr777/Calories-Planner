import * as model from './model.js';
import searchView from './Views/searchView.js';
import showView from './Views/showView.js';
import { View } from './Views/View.js';

const foodContainer = document.querySelector('.food-data');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const run = async function (query) {
  // loading spinner
  showView.spinner();

  // takes data from api
  await model.showFood(query);
  console.log(model.state.data);

  // showing data
  showView.renderHtml(model.state.data);
};

const init = function () {
  searchView.clicked(run);
};

init();
