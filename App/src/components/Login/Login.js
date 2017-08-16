'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Button, TextInput, Alert, Keyboard, AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class Login extends Component {
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
			}).then((response) => response.json()).then((response) => {
				if (response.auth == 'true') {
					const resetAction = NavigationActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({routeName: 'Home'})]
					});

					this.props.navigation.dispatch(resetAction);
					this.setPersitentLogin();
					Keyboard.dismiss();
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
			<KeyboardAwareScrollView contentContainerStyle={styles.fullContainer}>
				<View>
					<View style={styles.sectionContainer}>
						<Image
							source={require('./../../../img/logo.png')}
							style={styles.logo}
						/>

						<Text style={styles.text}>MaxiCom</Text>
						
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
				</View>
			</KeyboardAwareScrollView>
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
	}, 	input: {
		color: '#FFF',
	}
});