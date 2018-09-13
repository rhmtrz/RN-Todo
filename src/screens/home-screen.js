import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import TodoList from '../components/todo';
import Hello from '../components/hello'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the HomeScreen component</Text>
        <TodoList />
        {/* <Hello /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
