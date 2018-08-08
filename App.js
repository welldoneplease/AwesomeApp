/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, Button, Alert, View} from 'react-native';

// Import App Center Crashes at the top of the file.
import Crashes, { ErrorAttachmentLog } from 'appcenter-crashes';

const instructions = 'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu';

Crashes.setListener({
  getErrorAttachments(report) {
    const textAttachment = ErrorAttachmentLog.attachmentWithText('Hello text attachment!', 'hello.txt');
    return [textAttachment];
  }

  // Other callbacks must also be defined at the same time if used.
  // Default values are used if a method with return parameter is not defined.
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Press Me"
          onPress={Crashes.generateTestCrash}
        />
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
    color: 'yellow',
    marginBottom: 5,
  },
});
