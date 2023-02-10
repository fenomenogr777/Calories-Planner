import * as model from './model.js';
import searchView from './Views/searchView.js';
import showView from './Views/showView.js';
import extractView from './Views/extractView.js';
import recipesView from './Views/recipesView.js';

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

 let data;
 data =
    model.state.data.length > model.state.dataUpdate.length
      ? model.state.data
      : model.state.dataUpdate;

      
      model.state.data=[]
      model.state.dataUpdate=[]
  // Push data to total array
  model.totalFoodData(data);
  console.log(model.state.data);

  // render html on every food
  extractView.render(data[0]);
  // render html on total
  extractView.renderTotal(model.state.totalData);
  showView.clear();

};

const controlId = function (id) {
  // delete array based on id
  model.state.totalData = model.state.totalData.filter(item => item.id !== id);

  // update total
  extractView.renderTotal(model.state.totalData);
};

const controlAddRecipe = function (recipeName) {
  // add recipe on state
  model.createRecipe(recipeName);

  // clean content
  extractView.clear();

  // render html on total
  extractView.renderTotal(model.state.totalData);

  // render recipes data
  recipesView.render(model.state.currRecipe);
  model.state.currRecipe = [];
};

const controlRecipeId = function (recipeId) {
  // model.state.recipes.splice(recipeId, 1);

  model.state.recipes = model.state.recipes.filter(
    item => item.id !== recipeId
  );
};

const controlDeleteAll = function () {
  model.state.recipes = [];
};

const init = function () {
  searchView.clickedSearch(controlCreateData);
  showView.clickedUpdateData(controlUpdateData);
  showView.clickedAddMeal(controlExtractFood);
  extractView.clickDelete(controlId);
  extractView.clickAddRecipe(controlAddRecipe);
  recipesView.clickDelete(controlRecipeId);
  recipesView.clickDeleteAll(controlDeleteAll);
};

init();

document.querySelector('.btn-calories').addEventListener('click', function (e) {
  document.querySelector('.calculate-calories').classList.remove('hidden');
});
