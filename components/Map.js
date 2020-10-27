import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default ({longPress}) => {
	return (
		<MapView 
			style={styles.map}
			onLongPress={longPress}
		/>
	);
}

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width,
	},
});

