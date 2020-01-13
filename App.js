import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';


import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const firebaseConfig = {
  apiKey: 'AIzaSyBsN8XP4io-quty4uBERXEIYxGo78N7_do',
  authDomain: 'memoapp-91ccf.firebaseapp.com',
  databaseURL: 'https://memoapp-91ccf.firebaseio.com',
  projectId: 'memoapp-91ccf',
  storageBucket: 'memoapp-91ccf.appspot.com',
  messagingSenderId: '80889866409',
  appId: '1:80889866409:web:12dd3e95483d09ffc3a1b8',
  measurementId: 'G-Y94K7R5D3Y'
};
firebase.initializeApp(firebaseConfig);


const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Home: {screen: MemoListScreen},
    MemoDetail: { screen: MemoDetailScreen },
    MemoEdit: { screen: MemoEditScreen },
  }, {
  defaultNavigationOptions: {
    headerTitle: 'Memot',
    headerStyle: {
      backgroundColor: '#265366'
    },
    headerTitleStyle: {
      color: '#fff',
    },
    headerTintColor: '#fff',
    headerBackTitle: '',
  }
}
)

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