import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
  titletext: {
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: "#3f3f3f",
  },
  photo: {
    height: 215,
    width: 287,
  },
});

export default class RoomMap extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titletext}>{"What Map?"}</Text>
      </View>
    );
  }
}
