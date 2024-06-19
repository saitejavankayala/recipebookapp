import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import styles from './styles';
const RecipeDetailScreen = ({ route, navigation }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.recipeImage} source={{ uri: recipe.strMealThumb }} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <View style={styles.ingredients}>
        {recipe.strIngredient1 && <Text style={styles.ingredient}>- {recipe.strIngredient1}</Text>}
        {recipe.strIngredient2 && <Text style={styles.ingredient}>- {recipe.strIngredient2}</Text>}
        {/* Add more ingredients as needed */}
      </View>
      <Text style={styles.instructions}>{recipe.strInstructions}</Text>
      <Button title="Add to Favorites" onPress={() => { /* Add to favorites logic */ }} />
    </ScrollView>
  );
};



export default RecipeDetailScreen;
