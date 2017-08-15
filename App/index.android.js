'use strict';

import React, {Component} from 'react';
import {AppRegistry, AsyncStorage} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';
import Loading from './src/components/Loading/Loading';

export default class LoginApp extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			loading: true,
			userLogged: undefined
		};

		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 2000);
	}

	async componentWillMount() {
		try {
			await AsyncStorage.getItem('@Storage:userLogged')
			.then((userStatus) => {
				this.updateUserStatus(userStatus)
			});
		} catch (error) {
			this.updateUserStatus(false);
		}
	}

	updateUserStatus(userStatus) {
		this.setState({
			userLogged: userStatus
		});
	}

	render() {
		if (this.state.loading == true || this.state.userLogged === undefined) {
			return (
				<Loading/>
			);
		} else {
			return (
				this.state.userLogged ?
					<Home/>
				:
					<Login navigation={this.props.navigation}/> 
			);
		}
	}
}

const App = StackNavigator({
	Login: {screen: LoginApp},
	Home: {screen: Home}
}, {
	headerMode: 'none'
});

AppRegistry.registerComponent('LoginApp', () => App);