/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TextInput,
  StatusBar,
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

import Spinner from 'react-native-loading-spinner-overlay';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import Button from 'react-native-button';

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
    }, 1000);
  }

  render() {
    const {visible} = this.state;
    return (
      <View style={styles.container}>
         <StatusBar style={styles.statusBar} />
        <Spinner visible={visible} color="#fff" overlayColor="rgb(0,150,136)"/>

        <NavBar style={styles}>
          <NavTitle style={styles.title}>Anonymous</NavTitle>
        </NavBar>

        <View style={{flex: 1, padding: 20}}>
          <ScrollView>
            <Text>main</Text>
          </ScrollView>
        </View>

        <View>
          <TextInput autoFocus={true} multiline={true} style={styles.textInput} placeholder={'Type a message...'}/>
          <Button style={{fontSize: 20, color: 'green'}} styleDisabled={{color: 'red'}}>Send</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    width: width,
    height: height,
  },

  statusBar: {
    backgroundColor: '#00695c',
  },

  navBar: {
    backgroundColor: '#00695c',
  },

  spinner: {
    backgroundColor: 'rgb(0,150,136)',
    padding: 16,
  },

  title: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textInput: {
    flex: 1,
    left: 0,
    right: 10,
    height: 60,
    fontSize: 17,
    lineHeight: 2,
    padding: 10,
    backgroundColor: '#ddd'
  },
});

AppRegistry.registerComponent('anonymous', () => anonymous);
