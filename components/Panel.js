import React from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native';

export default () => {
	return (
		<View style={styles.panel}>
			<Button title='Lista' />
			<Button title='Mostrar/Ocular' /> 
		</View>
	);
};

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
