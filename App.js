import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { Map, Modal, Panel } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([]);

  const handleLongPress = ({ nativeEvent }) => {
    setPuntos([...puntos, {coordinate: nativeEvent.coordinate}]);
  };

  console.log(puntos);
  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress}/>
      <Modal 
        showModal={true}
      >
        <Text>Ejemplirijillo</Text>
      </Modal>
      <Panel />
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

