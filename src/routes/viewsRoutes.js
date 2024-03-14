const express = require('express');
const router = express.Router();

const { getAllRecipes, getSpecificRecipe } = require('../controllers/viewControllers');

router.get('/', getAllRecipes);

router.get('/receitas/:id', getSpecificRecipe);

router.get('/receitas', (req, res) => {
  res.render('newRecipe');
});

module.exports = router;