import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class FruitList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formText}>Fruit List</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfdfdf',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    alignSelf: 'stretch'
  },
  formText: {
    fontSize: 20,
    color: '#333'
  }
});

export default FruitList;
