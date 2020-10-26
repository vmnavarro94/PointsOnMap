import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { Map, Modal } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Map/>
      <Modal />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

