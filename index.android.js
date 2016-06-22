/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

class anonymous extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 2000);
  }

  render() {
    const {visible} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="rgb(0,150,136)" />
        <Spinner visible={visible} color="#fff" overlayColor="rgb(0,150,136)"/>
        <View visible={visible}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </View>
    );
  }
}

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
  spinner: {
    backgroundColor: "rgb(0,150,136)",
  }
});

AppRegistry.registerComponent('anonymous', () => anonymous);
