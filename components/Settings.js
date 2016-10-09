import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Picker,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    maxHeight: 100,
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: "#d9f7f7",
    borderRadius: 10,
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
});

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {autoTime: "60"};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.titletext}>
            Check-Out Auto Reminder:
          </Text>
            <Picker
              selectedValue={this.state.autoTime}
              onValueChange={(time) => this.setState({autoTime: time})}
              style={styles.picker}>
              <Picker.Item label="15 Minutes" value="15" />
              <Picker.Item label="30 Minutes" value="30" />
              <Picker.Item label="1.0 Hour" value="60" />
            </Picker>
        </View>
      </View>
    );
  }
}

export default Settings;
