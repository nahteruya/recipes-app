const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllRecipes = async (req,res) => {
  try {
    const recipes = await prisma.recipe.findMany()
    const recipesWithIngredients = await Promise.all(
      recipes.map(async recipe => {
          // Fetch ingredients associated with the current recipe
          const ingredients = await prisma.ingredient.findMany({
              where: { recipeId: recipe.id }
          });

          // Return the recipe with the list of ingredients
          return {
              ...recipe,
              ingredients
          };
      })
    );
    res.render('index', { recipesWithIngredients })
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const getSpecificRecipe = async (req,res) => {
  const receitaId = req.params.id;
  try {
    const recipe = await prisma.recipe.findUnique({ where: { id: receitaId } });
    const ingredients = await prisma.ingredient.findMany({ where: { recipeId: receitaId } });
    const currentRecipe = {
      ...recipe,
      ingredients
    }
    res.render('recipe', { currentRecipe });
  } catch(err) {
    res.status(500).send(err.message)
  }
}

module.exports = { getAllRecipes, getSpecificRecipe }