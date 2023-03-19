import { useEffect, useState } from "react";
import axios from "axios";
import useGetUserId from "../hooks/useGetUserId";
import { useCookies } from "react-cookie";

const Home = () => {
  const userId = useGetUserId();
  const [cookies] = useCookies(["access_token"]);

  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:3300/recipes");
      setRecipes(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchSavedRecipes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3300/recipes/savedRecipes/ids/${userId}`
      );
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.error(err);
    }
  };

  const saveRecipe = async (recipeId) => {
    try {
      const requestBody = {
        recipeId,
        userId,
      };
      const response = await axios.put(
        "http://localhost:3300/recipes",
        requestBody,
        { headers: { authorization: cookies.access_token } }
      );
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              {savedRecipes.includes(recipe._id) ? (
                <p>Already saved</p>
              ) : (
                <button onClick={() => saveRecipe(recipe._id)}>Save</button>
              )}
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
