const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

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
    res.status(200).json(recipesWithIngredients)
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const createNewRecipe = async (req,res) => {
  const { title, ingredients, methods, prepTime, photo, description } = req.body
  
  try {
    const recipe = await prisma.recipe.create({ data: { title, methods, prepTime, photo, description } })
    const ingredientPromises = ingredients.map(async (ingredient) => {
      return await prisma.ingredient.create({ data: { ...ingredient, recipe: { connect: { id: recipe.id } } } })
    })
    Promise.all(ingredientPromises)
    res.status(200).json(recipe)
  } catch(err) {
    res.status(500).json(err.message)
  }
}

const updateSpecificRecipe = async (req,res) => {
  const recipeId = req.params.id
  const { title, ingredients, methods, prepTime, photo, description } = req.body

  try {
    const updatedRecipe = await prisma.recipe.update({ where: { id: recipeId }, data: { title, methods, prepTime, photo, description } })
    if (ingredients) {
      await prisma.ingredient.deleteMany({
          where: { recipeId }
      });

      const newIngredients = ingredients.map(async ingredient => {
          return await prisma.ingredient.create({
              data: {
                  ...ingredient,
                  recipeId: updatedRecipe.id
              }
          });
      });

      await Promise.all(newIngredients);
      updatedRecipe.ingredients = await prisma.ingredient.findMany({
        where: { recipeId: updatedRecipe.id }
      });
  }
  res.status(200).json(updatedRecipe);
  } catch(err) {
    res.status(500).send(err.message)
  }
}

const deleteSpecificRecipe = async (req, res) => {
  const recipeId = req.params.id;

  try {
    const deletedIngredients = await prisma.ingredient.deleteMany({ where: { recipeId : recipeId }})
    await prisma.recipe.delete({ where: { id: recipeId } })
    Promise.all(deletedIngredients);
    res.status(200).send("Receita removida com sucesso")
  } catch(err) {
    res.status(500).send(err.message)
  }
}

module.exports = { getAllRecipes, createNewRecipe, updateSpecificRecipe, deleteSpecificRecipe }