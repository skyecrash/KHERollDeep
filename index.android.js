import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RoomList from './components/RoomList.js';
import Filter from './components/Filter.js';
import RoomMap from './components/RoomMap.js';
import Settings from './components/Settings.js';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

class KHERollDeep extends Component {
  render() {
      return (
        <ScrollableTabView
         locked={true}
         tabBarUnderlineStyle={{backgroundColor: "#D07AD0"}}
         tabBarActiveTextColor="#D07AD0" >
          <RoomList tabLabel="Home" />
          <Filter tabLabel="Filter" />
          <RoomMap tabLabel="Map" />
          <Settings tabLabel="Settings" />
        </ScrollableTabView>
      );
    }
}

AppRegistry.registerComponent('KHERollDeep', () => KHERollDeep);
