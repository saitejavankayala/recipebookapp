// src/types.ts

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RecipeDetailParams = {
  RecipeDetail: { recipe: Recipe }; 
};

export type RootStackParamList = {
  RecipeDetail: RecipeDetailParams['RecipeDetail'];
};

export type RecipeDetailScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetail'>;

export type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};
