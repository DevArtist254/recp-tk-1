export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();

    let main = data.data.recipe;

    const recipe = {
      publisher: main.publisher,
      ingredients: main.ingredients,
      sourceUrl: main.source_url,
      imageUrl: main.image_url,
      title: main.title,
      servings: main.servings,
      cookingTime: main.cooking_time,
      id: main.id,
    };

    state.recipe = recipe;
    console.log(state.recipe);
  } catch (error) {
    console.log(error);
  }
};
