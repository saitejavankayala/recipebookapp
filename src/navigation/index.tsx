// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/index';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeStack" component={HomeStack} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
