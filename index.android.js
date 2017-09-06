/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import Form from "./Form";
import firebase from "./firebase";
import { Router, Scene } from 'react-native-router-flux';
import React, { Component } from 'react';
import Viewweb from './Viewweb';
import Pagetwo from './Pagetwo';
import Mycomponent from './Mycomponent';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
let ss;

export default class db01 extends Component {
  constructor() {
    super();
    this.ref = null;
   
  }

  // On mount, subscribe to ref updates
  componentDidMount() {
    this.ref = firebase.database().ref('king');
    this.ref.on('value', this.handlePostUpdate);
    
  }

  // On unmount, ensure we no longer listen for updates
  componentWillUnmount() {
    if (this.ref) {
      this.ref.off('value', this.handlePostUpdate);
    }
  }

  // Bind the method only once to keep the same reference
  handlePostUpdate = (snapshot) => {
    console.log('Post Content', snapshot.val());
    console.log('Post Malone');
    this.ss=snapshot.val();
    firebase.messaging().getToken()
    .then((token) => {
    console.log('Device FCM Token: ', token);
});
  }

  render() {
    return (
      <Router>
 <Scene key="root">
   
<Scene key="Form" component={Form} title="SignIn" initial={true} />
<Scene key="Pagetwo" component={Pagetwo} title="User"  />
<Scene key="Mycomponent" component={Mycomponent} title="User"  />
<Scene key="Viewweb" component={Viewweb} title="User"  />

 
 </Scene>
 </Router>
    );
  }
  
}

AppRegistry.registerComponent('button', () => button);

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('db01', () => db01);
