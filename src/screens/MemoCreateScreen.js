import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

import * as firebase from 'firebase/app';
import 'firebase/firestore'


class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
      .then((docRef) => {

      })
      .catch((error) => {

      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline onChangeText={(text) => { this.setState({body: text})}}/>
            <CircleButton name='check' onPress={this.handlePress.bind(this)}></CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },

});

export default MemoCreateScreen;