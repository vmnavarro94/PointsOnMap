import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default ({ longPress, puntos, showMarkers }) => {
	return (
		<MapView
			style={styles.map}
			onLongPress={longPress}
		>
			{
				showMarkers && puntos.map(punto => 
					<Marker
						keyExtractor={punto.name}
						title={punto.name}
						coordinate={punto.coordinate}/>
				)
			}
		</MapView> 
	);
}

const styles = StyleSheet.create({
	map: {
		height: Dimensions.get('window').height - 150,
		width: Dimensions.get('window').width,
	},
});

