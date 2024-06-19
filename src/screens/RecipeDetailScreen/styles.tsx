import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  recipeImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  sourceContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  sourceText: {
    fontSize: 16,
    marginRight: 5,
  },
  sourceLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default styles;
