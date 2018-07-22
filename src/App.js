import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzxV2HmDxrBfTr6oOIEUALUPjVpy3oox4',
      authDomain: 'auth-625ef.firebaseapp.com',
      databaseURL: 'https://auth-625ef.firebaseio.com"',
      projectId: 'auth-625ef',
      storageBucket: 'auth-625ef.appspot.com',
      messagingSenderId: '862797576541'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true : return (
        <Button>
          Log out
        </Button>
      );
      case false : return (<LoginForm />);
      default : return (<Spinner />);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
