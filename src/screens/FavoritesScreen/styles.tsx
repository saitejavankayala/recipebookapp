import { StyleSheet } from "react-native";

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    recipeCard: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 2,
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
