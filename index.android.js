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
  ToolbarAndroid,
  View
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

import Spinner from 'react-native-loading-spinner-overlay';
import NavBar, { NavButton, NavButtonText, NavTitle, NavigationBar } from 'react-native-nav';
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
        <View>
          <Spinner visible={visible} color="#fff" overlayColor="rgb(0,150,136)"/>
          <StatusBar style={styles.statusBar} />
          <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="white"
          title="Anonymous" />
        </View>
        <View style={{flex: 1}}>
          <ScrollView style={styles.scrollView}>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
            <Text>main</Text>
          </ScrollView>
          <TextInput autoFocus={true} multiline={true} style={styles.textInput} placeholder={'Type a message...'}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },

  toolbar: {
    backgroundColor: '#00695c',
    height: 60,
    paddingLeft: 20
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
  scrollView: {
    backgroundColor: '#f2f2f2',
    height: height - 150,
  },
});

AppRegistry.registerComponent('anonymous', () => anonymous);
