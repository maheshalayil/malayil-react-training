import React, { Component } from 'react';

export default class Message extends Component {
 state = { message: '', age:'' };

 render() {
   this.callApi().then(result => this.setState( {message : result} ))
   return (
     <p>message is {this.state.message}</p> );
 }

 callApi() {
   return new Promise( (resolve) => {
     setTimeout( ()=> { resolve('hello'); }, 5000)
   })
 }

}