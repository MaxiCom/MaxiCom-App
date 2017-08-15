'use strict';

import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Alert, Keyboard, AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';

export default class LoginForm extends Component {
	constructor(props) {
	 	super(props);
	
		this.state = {
			username: null,
			password: null
		};
	}

	buttonOnPressHandler() {
		if (this.state.username !== null && this.state.password !== null) {
			fetch('https://MaxiCom.pro/api.php', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password
				})
			})
			.then((response) => response.json()).then((response) => {
				if (response.auth == 'true') {
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({routeName: 'Home'})]
					});

					this.props.navigation.dispatch(resetAction);
					Keyboard.dismiss();
					this.setPersitentLogin();
				} else {
					Alert.alert('Erreur', 'Mot de passe incorrect');
				}
			});
		}
	}

	async setPersitentLogin() {
		try {
			await AsyncStorage.setItem('@Storage:userLogged', 'true');
		} catch (error) {
			
		}
	}

	render() {
		return (
			<View style={styles.sectionContainer}>
				<TextInput 
					style={styles.input}
					placeholder="Nom d'utilisateur"
					placeholderTextColor="white"
					underlineColorAndroid='white'
					onChangeText={(username) => this.setState({username})}
				/>

				<TextInput 
					style={styles.input}
					placeholder='Mot de passe'
					placeholderTextColor="white"
					underlineColorAndroid="white"
					secureTextEntry
					onChangeText={(password) => this.setState({password})}
				/>

				<Button
					title='Connexion'
					onPress={() => this.buttonOnPressHandler()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		color: '#FFF',
	}
});