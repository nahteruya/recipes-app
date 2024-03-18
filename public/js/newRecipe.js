let ingredientsList;
let stepsList;

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
      <span class="material-symbols-outlined" id="trash-icon-ingredient${ingredientsCount}" onClick="deleteIngredient(event)">delete</span>
    </div>`);
}

addIngredientBtn.addEventListener("click", addIngredientField)

// Delete ingredient field
const deleteIngredient = (e) => {
  let currentIngredient = e.target.parentNode;
  currentIngredient.remove();
}



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
      <span class="material-symbols-outlined" id="trash-icon-step${methodsCount}" onClick="deleteStep(event)">delete</span>
    </div>`);
}

addMethodBtn.addEventListener("click", addMethodField);

// Delete method field
const deleteStep = (e) => {
  let currentStep = e.target.parentNode;
  currentStep.remove();
}

// Criar receita
const createBtn = document.querySelector("#createBtn");

createBtn.addEventListener("click", () => {
  const titleValue = document.querySelector("#title").value;
  const descriptionValue = document.querySelector("#description").value;
  const prepTimeValue = document.querySelector("#prepTime").value;
  const photoUrl = document.querySelector("#photo").value;


  fetch("/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
})
