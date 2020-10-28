import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';

import { Map, Modal, Panel, Input, PointList } from './components';

const NEW_POINT_MODAL_STATE = 'new_point';
const POINTS_LIST_MODAL_STATE = 'points_list';

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [puntoTemp, setPuntoTemp] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalState, setModalState] = useState(NEW_POINT_MODAL_STATE);
  const [showMarkers, setShowMarkers] = useState(true);

  const toggleShowMarkers = () => setShowMarkers(!showMarkers);
  
  const handleLongPress = ({ nativeEvent }) => {
    setModalState(NEW_POINT_MODAL_STATE);
    setPuntoTemp(nativeEvent.coordinate);
    setShowModal(true);
  };

  const handleChangeText = text => {
    setNombre(text);
  }

  const clearModal = () => {
    setShowModal(false);
    setNombre('');
  }

  const handleSubmit = () => {
    const newPoint = { coordinate: puntoTemp, name: nombre };
    setPuntos([...puntos, newPoint]);
    clearModal();
  }

  const handleListPress = () => {
    setModalState(POINTS_LIST_MODAL_STATE);
    setShowModal(true);
  }

  console.log(puntos);
  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} puntos={puntos} showMarkers={showMarkers}/>
      <Modal showModal={showModal}
      >
        {
          modalState === NEW_POINT_MODAL_STATE
            ?
            <View style={styles.form}>
              <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText} />
              <Button title='Aceptar' onPress={handleSubmit}/>
              <Button title='Cancelar' onPress={clearModal}/>
            </View>
            :
            <PointList puntos={puntos} closeModal={() => setShowModal(false)}/>
        } 
      </Modal>
      <Panel onPressLeft={handleListPress} textLeft='Lista' onPressRigh={toggleShowMarkers} textRight={showMarkers ? 'Ocultar' : 'Mostrar'}/>
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
  form: {
    padding: 15,
  },
});

