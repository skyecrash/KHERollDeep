import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';

import MultipleChoice from 'react-native-multiple-choice';

const styles = StyleSheet.create({
  sortbycontainer: {
    maxHeight: 100,
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: "#d9f7f7",
    borderRadius: 10,
  },
  showonlycontainer: {
    maxHeight: 300,
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "#d9f7f7",
    borderRadius: 10,
    backfaceVisibility: 'visible',
  },
  titletext: {
    marginTop: 12,
    marginLeft: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: "#3f3f3f",
  },
  picker: {
    marginLeft: 12,
    marginBottom: 12,
  },
  multiplechoice: {
    marginTop: 5,
    marginHorizontal: 18,
    marginBottom: 12,
  },
});

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {sortCond: "avail"};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.sortbycontainer}>
          <Text style={styles.titletext}>
            Sort By:
          </Text>
          <Picker
            selectedValue={this.state.sortCond}
            onValueChange={(cond) => this.setState({sortCond: cond})}
            style={styles.picker}>
            <Picker.Item label="Availability" value="avail" />
            <Picker.Item label="Floor" value="floor" />
            <Picker.Item label="Capacity" value="capacity" />
          </Picker>
        </View>
        <View style={styles.showonlycontainer}>
          <Text style={styles.titletext}>Show Only:</Text>
          <MultipleChoice
            style={styles.multiplechoice}
            options={[
              'Ground Floor',
              'Floor 1',
              'Floor 2',
              'Floor 3',
              'Available',
              'Reserved',
            ]}
            selectedOptions={['Available']}
            maxSelectedOptions={6}
            onSelection={(option)=>{null}}
  />
        </View>
      </View>
    );
  }
}

export default Filter;
