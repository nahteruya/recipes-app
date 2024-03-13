const express = require('express')
const router = express.Router()

const { getAllRecipes, createNewRecipe, updateSpecificRecipe, deleteSpecificRecipe } = require('../controllers/recipeConstrollers');

// Read all recipes
router.get('/', getAllRecipes)

// Create a recipe
router.post('/', createNewRecipe)

// Modify a recipe
router.put('/:id', updateSpecificRecipe)

// Delete a recipe 
router.delete('/:id', deleteSpecificRecipe)

module.exports = router