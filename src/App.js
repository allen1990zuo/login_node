import React, { Component } from 'react';
import './App.css';

var constants=require('./constants.js')
var Client=require("node-rest-client").Client;
var regUsername=constants.REG_USER_NAME
var regPassword=constants.RGE_PASSWORD
var userNameRule=constants.USER_NAME_RULE
var passwordRule=constants.PASSWORD_RULE
var passRule=constants.PASS_RULE
var Register=React.createClass({
	getInitialState: function(){
		return{
			username:'',
			password:'',
			name_err:'',
			password_err:'',
			message:'',
			username_color:constants.COLOR_RED,
			password_color:constants.COLOR_RED
		}
	},
	changeUserName(e){
		var username=e.target.value
		if(regUsername.test(username)){
			
			this.setState({
				username:username,
				name_err:passRule,
				username_color:constants.COLOR_GREEN
			})
		}
		else{		
			
			this.setState({
				username:username,
				name_err:userNameRule,
				username_color:constants.COLOR_RED
			})
		}
		
		
		
	},
	changePassword(e){
		var password=e.target.value
		if(regPassword.test(password)){
			this.setState({
				password:password,
				password_err:passRule,
				password_color:constants.COLOR_GREEN
			})
		}
		else{
			this.setState({
				password:password,
				password_err:passwordRule,
				password_color:constants.COLOR_RED
			})
		}

	},
	handleClick(){
		if(this.state.name_err===passRule&&this.state.password_err===passRule){
			var client=new Client()
			var url=constants.URL+constants.API_CREAT_USER
			var args = {
			    data: { 
			    	name:this.state.username,
					password:this.state.password
				},
			    headers: { "Content-Type": "application/json" }
			}
			var that=this
			client.post(url,args,function(result){										
				that.setState({
					message:result+'',
					username:'',
					password:'',
					name_err:'',
					password_err:'',
					username_color:constants.COLOR_RED,
					password_color:constants.COLOR_RED
				})
			})						
		}
								
	},
	render:function(){
		var userColor={
				color:this.state.username_color
		}
		var passwordColor={
				color:this.state.password_color
		}
		return(
			<div>
			<table>
			<tbody>
			<tr>
				<td>UserName:</td>
				<td><input type="text" value={this.state.username} onChange={this.changeUserName} /></td>
				<td style={userColor}>{this.state.name_err}</td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type="password" value={this.state.password} onChange={this.changePassword} /></td>
				<td style={passwordColor}>{this.state.password_err}</td>
			</tr>
			<tr>
				
				<td><button onClick={this.handleClick}>Register</button></td>
				<td></td>
			</tr>			
			</tbody>
			</table>			
			<h1>{this.state.message}</h1>
			</div>
		)
		
	}
})
class App extends Component {
  render() {
    return (
     <Register />
    );
  }
}

export default App;
