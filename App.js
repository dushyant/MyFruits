import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import AddFruitForm from './components/AddFruitForm';
import FruitList from './components/FruitList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <AddFruitForm />
        <FruitList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
});
