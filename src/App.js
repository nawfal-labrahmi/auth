import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzxV2HmDxrBfTr6oOIEUALUPjVpy3oox4',
      authDomain: 'auth-625ef.firebaseapp.com',
      databaseURL: 'https://auth-625ef.firebaseio.com"',
      projectId: 'auth-625ef',
      storageBucket: 'auth-625ef.appspot.com',
      messagingSenderId: '862797576541'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app!</Text>
      </View>
    );
  }
}

export default App;
