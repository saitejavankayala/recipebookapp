import { StyleSheet } from "react-native";
import { fontSize, fontWeight } from "../../utility/fonts";
import colors from "../../utility/colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBar: {
      height: 40,
      borderWidth: 1,
      borderRadius:10,
      paddingLeft:10,
      margin: 20,
      marginBottom:40,
    },
    recipeCard: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: colors.WHITE_COLOR,
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
      fontWeight: fontWeight.Bold,
    },
    description: {
      color: '#666',
    },
    errorContainer: {
      flex: 1,
      alignContent: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems:'center'
    },
    errorTitle: {
      fontWeight: fontWeight.Bold,
      color: colors.ERROR_COLOR,
      fontSize: fontSize.ExtraLarge
    },
  });

  export default styles;