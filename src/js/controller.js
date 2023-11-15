import * as model from './model.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////

const showRecipe = async function () {
  try {
    await model.loadRecipe(id);
  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
};

showRecipe();
