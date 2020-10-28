import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Dimensions } from 'react-native';

export default ({ puntos, closeModal }) => {
	return (
		<>
			<View style={styles.list}>
				<FlatList 
					data={puntos.map(punto => punto.name)} 
					keyExtractor={item => item}
					renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
				/>
			</View>
			<View style={styles.button}>
				<Button title='Cerrar' onPress={closeModal}/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	list: {
		height: Dimensions.get('window').height - 250,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		height: 50,
		justifyContent: 'center',
		padding: 15,
	},
	button: {
		paddingBottom: 15,
	},
});

