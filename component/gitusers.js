import React from 'react'
import axios from 'axios';

export default class GitUser extends  React.Component {
  state = { users: [] };

  render() {
    
    return (
      <div>
        <p>git users - {this.state.users.length}</p>
        <ul>
         {
           this.state.users.map(x=> {
             return <li>{x.login}</li>
           })
         }
         </ul>
      </div>
    );
  }

  componentDidMount() {

    axios.get('https://api.github.com/users')
    .then(result => this.setState( {users: result.data} ));

  }

}