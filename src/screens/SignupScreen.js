import React from 'react';
import { View, TouchableHighlight, StyleSheet, TextInput, Text } from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';


class SignupScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      this.props.navigation.navigate('Home');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>メンバー登録</Text>

        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email Address'
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry
        />

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)} underlayColor='#C70F66'>

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