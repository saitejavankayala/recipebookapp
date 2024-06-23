import React, { useState, useEffect } from "react";
import { Alert, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { fetchRecipes } from "../../services/api";
import RNTextInput from "../../components/RNTextInput";
import RNFlatList from "../../components/RNFlatList";
import RNText from "../../components/RNText";
import RNFastImage from "../../components/RNFastImage";
import SkeletonPlaceholder from "../../components/RNSkeletonPlaceholder";

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
  const [loading, setLoading] = useState<boolean>(true);

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  useEffect(() => {
    loadRecipes(search);
  }, [search]);

  const loadRecipes = async (searchQuery = "") => {
    try {
      setLoading(true);
      const data = await fetchRecipes(searchQuery);
      setRecipes(data);
      setLoading(false);
    } catch (error: any) {
      Alert.alert("Error", error.message);
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
            <RNText numberOfLines={2}  style={styles.thumbnail} ellipsizeMode='tail'>{item.strMeal}</RNText>
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
        </View>
      </TouchableNativeFeedback>
    );
  };

  const Search = () => (

    <RNTextInput
      style={styles.searchBar}
      placeholder="Search by name or ingredients"
      value={search}
      onChangeText={handleSearch}
    />

  );

  const renderEmptyComponent = () => {
    return <View style={styles.errorContainer}>
      <RNText style={styles.errorTitle}>No favorite recipes found!!!!</RNText>
    </View>;
  };

  return (
    <View>
      <Search />
      {loading ?
        [...Array(20)].map((_, index) => (
          <SkeletonPlaceholder key={index} />
        )) :
        <RNFlatList
          data={recipes}
          renderItem={RecipeListItem}
          keyExtractor={(item) => item.idMeal}
          ListEmptyComponent={renderEmptyComponent}
        />}
    </View>
  );
};

export default HomeScreen;
