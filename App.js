import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>

      <Appbar></Appbar>
      {/* <MemoListScreen></MemoListScreen> */}
      {/* <MemoDetailScreen></MemoDetailScreen> */}
      {/* <LoginScreen></LoginScreen> */}
      <SignupScreen></SignupScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});