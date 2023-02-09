import * as model from './model.js';
import searchView from './Views/searchView.js';
import showView from './Views/showView.js';
import extractView from './Views/extractView.js';
import { View } from './Views/View.js';

const controlCreateData = async function (query) {
  // removes hidden class and make el appear
  showView.removeHidden();

  // loading spinner
  showView.spinner();

  // takes data from api
  await model.showFoodData(query);

  // showing data
  showView.render(model.state.data[0]);
};

const controlUpdateData = function (valueEl) {
  model.updateFoodData(valueEl);
  showView.render(model.state.dataUpdate[0]);
};

const controlExtractFood = function () {
  //removes hidden class and make el appear
  extractView.removeHidden();

  // data is default or update based on array.length
  const data =
    model.state.data.length > model.state.dataUpdate.length
      ? model.state.data
      : model.state.dataUpdate;

  // Push data to total array
  model.totalFoodData(data);

  // render html on every food
  extractView.render(data[0]);
  // render html on total
  extractView.renderTotal(model.state.totalData);

  showView.clear();
};

const controlId = function (id) {
  // delete array based on id
  model.state.totalData.splice(id, 1);
  // update total
  extractView.renderTotal(model.state.totalData);
  console.log(model.state.totalData);
};

const init = function () {
  searchView.clickedSearch(controlCreateData);
  showView.clickedUpdateData(controlUpdateData);
  showView.clickedAddMeal(controlExtractFood);
  extractView.clickDelete(controlId);
};

init();
