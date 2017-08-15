'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View style={styles.fullContainer}>
				<Text style={styles.centeredText}>Home</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fullContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: '#1E8BC3'
	}, centeredText: {
		fontSize: 50,
		fontWeight: 'bold',
		color: 'white'
	}
});