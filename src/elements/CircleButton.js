import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067'
}, 'FontAwesome');

class CircleButton extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'FontAwesome': fontAwesome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <CustomIcon name={this.props.name} style={[styles.circleButtonTitle, { color: textColor }]} />
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFF'
  }

})

export default CircleButton;