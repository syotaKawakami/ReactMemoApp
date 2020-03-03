import React from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

import * as firebase from 'firebase/app';
import 'firebase/firestore';


class MemoListScreen extends React.Component {
  state = {
    memoList: []
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`)
    .onSnapshot((snapshot) => {
      const memoList = [];
      snapshot.forEach((doc) => {
        memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList });
    });
  }

  handlePress() {
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>

        <MemoList memoList={this.state.memoList} navigation={this.props.navigation}></MemoList>

        <CircleButton name='plus' onPress={this.handlePress.bind(this)}></CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6'
  }
})

export default MemoListScreen;