import React, { Component } from 'react';
import { database } from '../firebase';

import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';





database.settings({
  timestampsInSnapshots: true
})

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }

    this.handleSubmit = (n) => {
      const collection = database.collection("text")
      console.log('this is coooo', collection);
      //const { data } = this.state;
      collection.add({
        first: "Rahmat",
        middle: "React Native",
        last: "Firebase",
        born: n
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      })
    }
  }
  render() {
    const arr = [10, 100, 1000, 10000];
    return (
      <View style={styles.container}>
        <Text>I'm the Todo list component</Text>
        {arr.map((n, i) => <Button key={i} title={`Submit ${n}`} onPress={() => this.handleSubmit(n)}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
