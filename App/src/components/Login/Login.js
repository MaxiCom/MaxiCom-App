'use strict';

import React, {Component} from 'react';
import {KeyboardAvoidingView, View, StyleSheet, Image, Text} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<KeyboardAvoidingView
				style={styles.fullContainer}
				behavior="padding"
			>
				<View style={styles.sectionContainer}>
					<Image
						source={require('./../../../img/logo.png')}
						style={styles.logo}
					/>
					<Text style={styles.text}>MaxiCom</Text>
					<LoginForm navigation={this.props.navigation}/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	fullContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		backgroundColor: '#1E8BC3'
	}, sectionContainer: {
		width: 275,
		marginBottom: 30
	}, logo: {
		width: 350,
		height: 120,
		marginLeft: -37.5
	}, text: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFF',
		textAlign: 'center'
	}
});