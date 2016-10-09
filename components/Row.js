import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ImgIndicator from './ImgIndicator.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  paraText: {
    marginLeft: 12,
    fontSize: 12,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <ImgIndicator imgSrc={props.imgSrc} photoStyle={styles.photo} />
    <Text style={styles.paraText}>
      (Capacity: {`${props.rmCapacity}`})
    </Text>
    <Text style={styles.titleText}>
      {`${props.rmNumber}`}
    </Text>
  </View>
);

export default Row;
