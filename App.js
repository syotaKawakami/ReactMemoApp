import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: MemoListScreen,
    navigationOptions: {
      headerTitle: 'Memot',
     headerStyle: {
       backgroundColor: '#265366'
     },
     headerTitleStyle: {
       color: '#fff',
     }
    }
  },
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffdf6',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 78,
//   },
// });

export default createAppContainer(AppNavigator);