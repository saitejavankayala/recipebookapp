import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    recipeImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    },
    ingredients: {
      marginTop: 20,
    },
    ingredient: {
      fontSize: 16,
      marginBottom: 5,
    },
    instructions: {
      marginTop: 20,
      fontSize: 16,
    },
  });
  export default styles;