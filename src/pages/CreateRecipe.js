import { useState } from "react";
import axios from "axios";
import useGetUserId from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const CreateRecipe = () => {
  const userId = useGetUserId();
  const navigate = useNavigate();
  const [cookies] = useCookies(["access_token"]);

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userId,
  });

  const handleRecipeChange = (event) => {
    const { id: name, value } = event.target;
    setRecipe((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[index] = value;
    setRecipe((prev) => ({
      ...prev,
      ingredients,
    }));
  };

  const addIngredient = () => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ""],
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3300/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("Recipe created.");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={recipe.name}
          onChange={handleRecipeChange}
        />
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            id="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
          />
        ))}
        <button type="button" onClick={addIngredient}>
          Add Ingredient
        </button>
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
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
