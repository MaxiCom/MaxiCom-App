'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Image, Animated, Easing} from 'react-native';

export default class Loading extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			spinValue: new Animated.Value(0)
		};
	}

	componentDidMount() {
		Animated.timing(this.state.spinValue, {
			toValue: 10,
			duration: 10000,
			easing: Easing.inOut(Easing.linear),
			useNativeDriver: true
		}).start();
	}

	render() {
		let deg = this.state.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		});

		return (
			<View style={styles.fullContainer}>
				<Animated.Image
					source={require('./../../../img/spinner.png')}
					style={[styles.spinner, {transform: [{rotate: deg}]}]}
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