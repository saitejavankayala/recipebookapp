import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import styles from "./styles";
interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}
const FavoritesScreen = (props: any) => {
  const { navigation } = props;
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RecipeDetail", { recipe: item })
            }
          >
            <View style={styles.recipeCard}>
              <Image
                style={styles.thumbnail}
                source={{ uri: item.strMealThumb }}
              />
              <View style={styles.recipeInfo}>
                <Text style={styles.title}>{item.strMeal}</Text>
                <Text style={styles.description}>
                  {item.strInstructions.substring(0, 50)}...
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
