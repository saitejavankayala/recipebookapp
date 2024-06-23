// styles.js
import { StyleSheet } from 'react-native';
import colors from '../utility/colors';
import { fontSize, fontWeight } from '../utility/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    margin: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  skeletonCard: {
    height:100,
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginHorizontal:20,
  },
  skeletonThumbnail: {
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  skeletonInfo: {
    flex: 1,
    padding:10,
    justifyContent: 'center',
  },
  skeletonTitleContainer: {
    height: 20,
    backgroundColor: '#ccc',
    overflow: 'hidden',
    marginBottom: 5,
  },
  skeletonDescriptionContainer: {
    height: 14,
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  skeletonTitle: {
    height: 20,
    backgroundColor: '#e0e0e0',
  },
  skeletonDescription: {
    height: 14,
    backgroundColor: '#e0e0e0',
  },
  recipeCard: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  recipeInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: fontSize.LargeText,
    color: colors.WHITE_COLOR,
    fontWeight: fontWeight.Bold
  },

});

export default styles;
