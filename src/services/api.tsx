import { BASE_URL } from "../utility/config";

export const fetchRecipes = async (searchQuery = '') => {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${searchQuery}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error('Error fetching recipes: ', error);
    throw error;
  }
};
