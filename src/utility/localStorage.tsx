// utility/localStorage.js

import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = '@RecipeBook:Favorites';

export const getFavoriteRecipes = async (): Promise<Recipe[]> => {
    try {
        const favoritesJSON = await AsyncStorage.getItem(FAVORITES_KEY);
        if (favoritesJSON !== null) {
            return JSON.parse(favoritesJSON);
        }
        return [];
    } catch (error) {
        console.error('Error getting favorite recipes from AsyncStorage: ', error);
        return [];
    }
};

export const saveFavoriteRecipe = async (recipe: Recipe): Promise<void> => {
    try {
        let favorites = await getFavoriteRecipes();
        if (!favorites.find(r => r.idMeal === recipe.idMeal)) {
            favorites.push(recipe);
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
        }
    } catch (error) {
        console.error('Error saving favorite recipe to AsyncStorage: ', error);
    }
};

export const removeFavoriteRecipe = async (recipeId: string): Promise<void> => {
    try {
      let favorites = await getFavoriteRecipes();
      favorites = favorites.filter(recipe => recipe.idMeal !== recipeId);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error removing favorite recipe from AsyncStorage: ', error);
    }
  };

  export const isFavoriteRecipe = async (recipeId: string): Promise<boolean> => {
    try {
        const favorites = await getFavoriteRecipes();
        return favorites.some(r => r.idMeal === recipeId);
    } catch (error) {
        console.error('Error checking if recipe is favorite: ', error);
        return false;
    }
};