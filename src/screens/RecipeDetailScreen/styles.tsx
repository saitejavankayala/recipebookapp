import { StyleSheet } from 'react-native';
import colors from '../../utility/colors';
import { fontWeight } from '../../utility/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  favoriteContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor:colors.WHITE_COLOR,
    borderRadius: 50,
    elevation: 5,
  },
  favoriteIcon: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: fontWeight.Bold,
    textAlign: 'center',
    marginVertical: 10,
  },
  ingredients: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  ingredient: {
    marginBottom: 5,
  },
  instructions: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

});

export default styles;
