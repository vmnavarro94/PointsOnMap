import React from 'react';
import { Dimensions, Modal, StyleSheet, Text, View } from 'react-native';

import { Map } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Map/>
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
      >
        <View style={styles.center}>
          <View style={styles.modalView}>
            <Text>😃</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  }, 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
