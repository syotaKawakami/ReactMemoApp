import React from 'react';
import { View, TouchableHighlight, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';


class LoginScreen extends React.Component {

  state = {
    // email: '',
    // password: '',
    // for test
    email: 'test@example.com',
    password: 'password'
  }

  handleSubmit() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log('error', error);
      })
  }

  handlePress() {
    this.props.navigation.navigate('Signup');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput style={styles.input}
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email Address' />

        <TextInput style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry />

        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={this.handlePress.bind(this)}
          style={styles.signup}>
          <Text style={styles.signupText}>メンバー登録する</Text>
        </TouchableOpacity>

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
  },
  signup: {
    marginTop: 16,
    alignSelf: 'center',
  },
  signupText: {
    fontSize: 16
  }
});

export default LoginScreen;