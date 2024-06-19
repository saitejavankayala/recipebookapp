import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import styles from './styles'; // Ensure this contains your custom styles

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;


  const addToFavorites = () => {
    console.log('Added to favorites:', recipe.strMeal);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.recipeImage} source={{ uri: recipe.strMealThumb }} />
      <Text style={styles.title}>{recipe.strMeal}</Text>

      <View style={styles.ingredients}>
        {Object.keys(recipe)
          .filter(key => key.startsWith('strIngredient') && recipe[key])
          .map((ingredientKey, index) => (
            <Text key={index} style={styles.ingredient}>
              - {recipe[ingredientKey]} ({recipe[`strMeasure${ingredientKey.slice(-1)}`]})
            </Text>
          ))}
      </View>

      <Text style={styles.instructions}>{recipe.strInstructions}</Text>

      <Button title="Add to Favorites" onPress={addToFavorites} />

      <View style={styles.sourceContainer}>
        <Text style={styles.sourceText}>Source:</Text>
        <Text style={styles.sourceLink}>{recipe.strSource}</Text>
      </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
