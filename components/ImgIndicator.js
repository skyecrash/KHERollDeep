import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class ImgIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  setImage() {
    switch(this.props.imgSrc) {
      case("tick"):
        return (<Image source={require('./tick.png')} style={this.props.photoStyle} />);
      case("cross"):
        return (<Image source={require('./cross.png')} style={this.props.photoStyle} />);
      case("lock"):
        return (<Image source={require('./lock.png')} style={this.props.photoStyle} />);
    }
  }

  render() {
    var image = this.setImage();
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 8}}>
        {image}
      </View>
    );
  }
}

export default ImgIndicator;
