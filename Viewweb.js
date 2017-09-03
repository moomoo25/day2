import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Viewweb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20}}
      />
    );
  }
}