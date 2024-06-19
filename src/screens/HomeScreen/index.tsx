import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { fetchRecipes } from "../../services/api";
import RNTextInput from "../../components/RNTextInput";
import RNFlatList from "../../components/RNFlatList";
import RNText from "../../components/RNText";
import RNFastImage from "../../components/RNFastImage";

interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
}

const HomeScreen = (props: { navigation: any }) => {
  const { navigation } = props;
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    loadRecipes();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    loadRecipes(text);
  };

  

  const loadRecipes = async (searchQuery = "") => {
    try {
      const data = await fetchRecipes(searchQuery);
      setRecipes(data);
    } catch (error) {
      console.error("Error loading recipes: ", error);
    }
  };

  const RecipeListItem = ({ item }: { item: Recipe }) => {
    return (
      <TouchableOpacity  onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}>
        <View style={styles.recipeCard}>
          <RNFastImage style={styles.thumbnail} source={{ uri: item.strMealThumb }} />
          <View style={styles.recipeInfo}>
            <RNText style={styles.title}>{item.strMeal}</RNText>
            <RNText style={styles.description}>
              {item.strInstructions.substring(0, 50)}...
            </RNText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <RNTextInput
        style={styles.searchBar}
        placeholder="Search by name or ingredients"
        inputValue={search}
        onChangeText={handleSearch}
      />

      <RNFlatList
        data={recipes}
        renderItem={RecipeListItem}
        keyExtractor={(item) => item.idMeal}
      />
    </View>
  );
};

export default HomeScreen;
