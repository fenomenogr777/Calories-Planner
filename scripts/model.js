// Where data are saves when received from Api
export const state = {
  data: [],
  dataUpdate: [],
  totalData: [],
};

// Export data from API
export const showFoodData = async function (query) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': 'Qwl5+75I9DXtOQFKazelyQ==UcQ3BFwo90tS46lP',
      },
    };
    const res = await fetch(
      `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
      options
    );
    if (!res.ok) return;
    const data = await res.json();

    const item = data[0];
console.log(state.totalData.length);
    state.data = [
      {
        id: state.totalData.length,
        name: item.name,
        calories: +item.calories.toFixed(0),
        protein: +item.protein_g.toFixed(0),
        carbohydrate: +item.carbohydrates_total_g.toFixed(0),
        fat: +item.fat_total_g.toFixed(0),
        servingSize: +item.serving_size_g,
      },
    ];
  } catch (error) {
    throw Error(`PROBLEM`);
  }
};

export const updateFoodData = function (valueEL) {
  const data = state.data[0];

  state.dataUpdate = [
    {
      id: state.totalData.length,
      name: data.name,
      calories: Math.ceil((data.calories / 100) * valueEL),
      protein: Math.ceil((data.protein / 100) * valueEL),
      carbohydrate: Math.ceil((data.carbohydrate / 100) * valueEL),
      fat: Math.ceil((data.fat / 100) * valueEL),
      servingSize: valueEL,
    },
  ];
};

export const totalFoodData = function (data) {
  state.totalData.push(data[0]);
};
