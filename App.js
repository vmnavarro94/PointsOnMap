import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';

import { Map, Modal, Panel, Input } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [puntoTemp, setPuntoTemp] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleLongPress = ({ nativeEvent }) => {
    setPuntoTemp(nativeEvent.coordinate);
    setShowModal(true);
  };

  const handleChangeText = text => {
    setNombre(text);
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos([...puntos, newPunto]);
    setShowModal(false);
    setNombre('');
  }

  console.log(puntos);
  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress}/>
      <Modal showModal={showModal}
      >
        <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
        <Button title='Aceptar' onPress={handleSubmit}/>
        <Button title='Cancelar' onPress={() => {}}/>
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

