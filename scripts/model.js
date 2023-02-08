export const state = {
  data: {},
};

export const showFood = async function (query) {
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
    console.log(res);
    const item = data[0];

    state.data = {
      name: item.name,
      calories: +item.calories / +item.serving_size_g,
      protein: +item.protein_g,
      carbohydrate: +item.carbohydrates_total_g,
      fat: +item.fat_total_g,
    };
  } catch (error) {
    throw Error(`PROBLEM`);
  }
};

