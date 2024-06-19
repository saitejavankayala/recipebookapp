import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBar: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      margin: 20,
      marginBottom:40,
    },
    recipeCard: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 2,
      marginHorizontal:20,
    },
    thumbnail: {
      width: 100,
      height: 100,
    },
    recipeInfo: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontWeight: 'bold',
    },
    description: {
      color: '#666',
    },
  });

  export default styles;