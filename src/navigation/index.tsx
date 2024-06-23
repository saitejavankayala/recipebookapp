// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/index';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utility/colors';
import { View } from 'react-native';
import RNText from '../components/RNText';
import styles from './styles';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen}
      options={{
        headerShown:true,
        headerTitleAlign: 'left',
        headerTitle: (props) => (
         
          <RNText style={styles.headerStyles}>
              Dashboard
          </RNText>
     

        )
      }}
      />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen}
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: colors.WHITE_COLOR },
         
          headerTitle: (props) => (
            <RNText style={styles.headerStyles}>
              Recipe Details
          </RNText>
          )
        }}

      />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {

              return <SimpleLineIcons name={'home'} size={size} color={color} />;

            } else if (route.name === 'Favorites') {
              return <MaterialIcons name={'favorite-outline'} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: colors.PRIMARY_COLOR,
          tabBarInactiveTintColor: 'gray',
        })}

      >
        <Tab.Screen name="Home" component={HomeStack} options={{
          headerShown: false
        }} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
