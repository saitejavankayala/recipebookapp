import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";
import { getFavoriteRecipes, removeFavoriteRecipe } from "../../utility/localStorage";
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from "../../utility/colors";


const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesJSON = await getFavoriteRecipes();
      if (favoritesJSON !== null) {
        setFavorites(favoritesJSON);
      }
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to load favorite recipes.');
    }
  };

  const removeFromFavorites = async (recipeId: string) => {
    try {
      await removeFavoriteRecipe(recipeId);
      loadFavorites();
      Alert.alert('Success', 'Recipe removed from favorites.');
    } catch (error:any) {
      Alert.alert(error);
    }
  };

  const renderItem = ({ item }: { item: Recipe }) => (

    <View style={styles.recipeCard}>
       
      <Image style={styles.thumbnail} source={{ uri: item.strMealThumb }} />
      <View style={styles.recipeInfo}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.description}>
          {item?.strInstructions?.substring(0, 50)}...
        </Text>
      </View>
      <AntDesign
          name={'heart'}
          color={colors.PRIMARY_COLOR}
          size={20}
          onPress={()=>removeFromFavorites(item.idMeal)}
          style={styles.favoriteIcon}
        />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item) => item.idMeal}
        />
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>No favorite recipes found!!!!</Text>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;
