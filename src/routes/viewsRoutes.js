const express = require('express');
const router = express.Router();

const { getAllRecipes, getSpecificRecipe } = require('../controllers/viewControllers');

router.get('/', getAllRecipes);

router.get('/receitas/:id', getSpecificRecipe);

module.exports = router;