import React from 'react';
import { View, TouchableHighlight, StyleSheet, TextInput,Text } from 'react-native';
import CircleButton from '../elements/CircleButton';

class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>
        <TextInput style={styles.input} value='Email Address' />
        <TextInput style={styles.input} value='Password' />
        <TouchableHighlight style={styles.button} onPress={() => {}} underlayColor='#C70F66'>
          <Text style={styles.buttonTitle}>送信する</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
  },
  button: {
    backgroundColor: '#E31676',
    width: '70%',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18
  }
});

export default SignupScreen;