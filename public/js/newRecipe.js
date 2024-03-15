// Add ingredient field
const ingredientFields = document.querySelector(".ingredientsFields");
const addIngredientBtn = document.querySelector("#plus-icon-ingredients");

let ingredientsCount = 1;
const addIngredientField = () => {
  ingredientsCount++;
  ingredientFields.insertAdjacentHTML("beforeend", 
    `<div class="ingredientInput" id="ingredient${ingredientsCount}">
      <input type="number" name="amount" id="amount-ingredient-${ingredientsCount}" step="0.1">
      <select name="measurement" id="measurement-ingredient-${ingredientsCount}">
        <option value="milliliter">mL</option>
        <option value="liter">L</option>
        <option value="gram">g</option>
        <option value="kilogram">kg</option>
        <option value="tea-cup">xícara de chá</option>
        <option value="american-cup">copo-americano</option>
        <option value="teaspoon">colher de chá</option>
        <option value="coffee-spoon">colher de café</option>
        <option value="pinch">pitada</option>
      </select>
      <input type="text" name="ingredient" id="name-ingredient-${ingredientsCount}">
      <span class="material-symbols-outlined trash-icon" id="trash-icon-ingredient${ingredientsCount}">delete</span>
    </div>`);
}

addIngredientBtn.addEventListener("click", addIngredientField)

// Delete ingredient field


// Add method field
const methodFields = document.querySelector(".methodsFields");
const addMethodBtn = document.querySelector("#plus-icon-methods");

let methodsCount = 1;

const addMethodField = () => {
  methodsCount++;
  methodFields.insertAdjacentHTML("beforeend", 
    `<div class="methodInput">
      ${methodsCount}.
      <input type="text" name="step${methodsCount}" id="step${methodsCount}">
    </div>`);
}

addMethodBtn.addEventListener("click", addMethodField);

// Delete method field
