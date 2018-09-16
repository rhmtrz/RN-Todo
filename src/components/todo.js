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

    this.displayData = () => {
      let arr = [];
      const collection = database.collection("text");
      collection.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr = [...arr, doc.data()];
        });
        this.setState({
          data: arr
        })
      })
    }
  }
  render() {
    const arr = [10, 100, 1000, 10000];
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <Text>I'm the Todo list component</Text>
        {arr.map((n, i) => <Button key={i} title={`Submit ${n}`} onPress={() => this.handleSubmit(n)}/>)}
        <Button
          title="Read Data"
          onPress={this.displayData}/>
        {data.map((d, i) => (
          <View key={i}>
            <Text>{d.first}</Text>
            <Text>{d.born}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
