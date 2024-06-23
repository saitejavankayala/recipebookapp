import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert, TouchableNativeFeedback } from "react-native";
import styles from "./styles";
import { getFavoriteRecipes, removeFavoriteRecipe } from "../../utility/localStorage";
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from "../../utility/colors";
import RNFastImage from "../../components/RNFastImage";
import RNText from "../../components/RNText";
import navigation from "../../navigation";


const FavoritesScreen = (props: { navigation: any }) => {
  const { navigation } = props;
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
    } catch (error: any) {
      Alert.alert(error);
    }
  };


  const RecipeListItem = ({ item }: { item: Recipe }) => {
    return (
      <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('#00000040', false)}
      useForeground={true}
      onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}>
    
      <View style={styles.recipeCard}>
        <View style={{ flex: 1, padding: 16 }}>
          <RNText numberOfLines={2} style={styles.thumbnail} ellipsizeMode='tail'>{item.strMeal}</RNText>
          <RNText numberOfLines={3} ellipsizeMode='tail'>{item.strInstructions}</RNText> 
        </View>
        <View style={{ borderRadius: 24, overflow: 'hidden' }}>
          <RNFastImage
            source={{
              uri: item.strMealThumb,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.favoriteContainer}>
          <AntDesign
            name={'heart'}
            color={colors.PRIMARY_COLOR}
            size={25}
            onPress={() => removeFromFavorites(item.idMeal)}
            style={styles.favoriteIcon}
          />
        </View>
      </View>
</TouchableNativeFeedback>
    );
  };



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
          renderItem={RecipeListItem}
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
