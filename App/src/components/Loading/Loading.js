'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default class Loading extends Component {
	render() {
		return (
			<View style={styles.fullContainer}>
				<Image
					source={require('./../../../img/spinner.gif')}
					style={styles.spinner}
				/>
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
	}, spinner: {
		width: 100,
		height: 100
	}
});