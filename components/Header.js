import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My Fruits</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00ad00',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    alignSelf: 'stretch'
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  }
});


export default Header;
