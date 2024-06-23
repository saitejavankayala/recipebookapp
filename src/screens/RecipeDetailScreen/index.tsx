import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import { RouteProp } from '@react-navigation/native';
import { isFavoriteRecipe, removeFavoriteRecipe, saveFavoriteRecipe } from '../../utility/localStorage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utility/colors';
import { RootStackParamList } from '../../navigation/types'; 
type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

type Props = {
  route: RecipeDetailScreenRouteProp;
};

const RecipeDetailScreen: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const checkIsFavorite = async () => {
    const favorites = await isFavoriteRecipe(recipe.idMeal);
  
    setIsFavorite(favorites);
  };

  const toggleFavorite = async () => {
    if (isFavorite) {
      await removeFavoriteRecipe(recipe.idMeal);
    } else {
      await saveFavoriteRecipe(recipe);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.recipeImage} source={{ uri: recipe.strMealThumb }} />
      <View style={styles.favoriteContainer}>
        <AntDesign
          name={isFavorite ? 'heart' : 'hearto'}
          color={colors.PRIMARY_COLOR}
          size={25}
          onPress={toggleFavorite}
          style={styles.favoriteIcon}
        />
      </View>
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <View style={styles.ingredients}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10 }}>Ingredients</Text>
        {Object.keys(recipe)
          .filter(key => key.startsWith('strIngredient') && recipe[key as keyof Recipe] )
          .map((ingredientKey, index) => (
            <Text key={index} style={styles.ingredient}>
              - {recipe[ingredientKey as keyof Recipe]} ({recipe[`strMeasure${ingredientKey.slice(-1)}` as keyof Recipe]})
            </Text>
          ))}
      </View>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, paddingLeft: 20 }}>Instructions</Text>
      <Text style={styles.instructions}>{recipe.strInstructions}</Text>
    </ScrollView>
  );
};

export default RecipeDetailScreen;
