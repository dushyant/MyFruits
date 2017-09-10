import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class AddFruitForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formText}>Add Fruit Forms</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
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

export default AddFruitForm;
