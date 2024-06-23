import { StyleSheet } from "react-native";
import { fontSize, fontWeight } from "../../utility/fonts";
import colors from "../../utility/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  errorContainer: {
    flex: 1,
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems:'center'
  },
  recipeCard: {
    paddingTop:5,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: colors.WHITE_COLOR,
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
    fontWeight: fontWeight.Bold,
  },
  errorTitle: {
    fontWeight: fontWeight.Bold,
    color: colors.ERROR_COLOR,
    fontSize: fontSize.ExtraLarge
  },
  description: {
    color: '#666',
  },
  favoriteContainer: {
    position: 'absolute',
    top: 5,
    right: 5 ,
    backgroundColor: colors.WHITE_COLOR,
    borderRadius: 50,
    elevation: 5,
    height:40,
    width:40,
  },
  favoriteIcon: {
    backgroundColor: colors.WHITE_COLOR,
    height:40,
    borderRadius: 50,
    elevation: 5,
    padding: 10,
    marginRight:10
  },
});
export default styles;
