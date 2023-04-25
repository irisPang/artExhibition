import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import ItemDetailScreen from './src/pages/ItemDetailScreen';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from './reducer';
import { Provider } from 'react-redux';


const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Art Institute of Chicago" component={HomeScreen} />
        <Stack.Screen name="Art Work Details" component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

