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
    },
    recipeCard: {
      marginHorizontal:20,
      elevation: 2,
      overflow: 'hidden',
      flexDirection: 'row',
      borderRadius: 24,
      margin: 10,
      backgroundColor: colors.WHITE_COLOR
    },
    image:{ width: 140, height: 140 },
    thumbnail: { fontSize: 21, fontWeight: 'bold', color: colors.BLACK_COLOR },
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