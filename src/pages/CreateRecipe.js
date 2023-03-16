import { useState } from "react";

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: "",
  });

  const handleRecipeChange = (event) => {
    const { id: name, value } = event.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={recipe.name}
          onChange={handleRecipeChange}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          value={recipe.instructions}
          onChange={handleRecipeChange}
        />
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          value={recipe.imageUrl}
          onChange={handleRecipeChange}
        />
        <label htmlFor="cookingTime">Cooking Time (minutes)</label>
        <input
          type="text"
          id="cookingTime"
          value={recipe.cookingTime}
          onChange={handleRecipeChange}
        />
      </form>
    </div>
  );
};

export default CreateRecipe;
