import React, { Component } from 'react';
import * as firebase from 'firebase'
import 'firebase/firestore';

import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const config = {
  apiKey: "AIzaSyDOxOsa1yOK4EL_7pFTVUAkLiwe31jxXXU",
  authDomain: "todo-e0cd0.firebaseapp.com",
  databaseURL: "https://todo-e0cd0.firebaseio.com",
  projectId: "todo-e0cd0",
  storageBucket: "todo-e0cd0.appspot.com",
  messagingSenderId: "863784504836"
};
const settings = { timestampsInSnapshots: true }
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore().settings(settings)
}

const db = firebase.firestore();


export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }

    this.handleSubmit = (n) => {
      const collection = db.collection("text")
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
