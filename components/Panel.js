import React from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native';

export default ({ onPressLeft, textLeft, onPressRigh, textRight }) => {
	return (
		<View style={styles.panel}>
			<Button title={textLeft} onPress={onPressLeft} />
			<Button title={textRight} onPress={onPressRigh} /> 
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
