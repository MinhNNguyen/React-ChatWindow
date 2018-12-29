/*
  This program features chatboxs for two users in single page application
*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBox from './ChatBox';

/*
  Declare usernames of two users
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  
  /*
    Messages and their senders being saved in the state of the main application
  */
  
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };
  
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  /*
    Add new message to the end of the message array 
  */
  handleMessage = newMessage => {
    this.setState( currState => ({
      messages: [...currState.messages, newMessage],
    }));
  };

  /*
    Render the UI for the application
  */
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    	  <ChatBox username={users[0].username} messages={this.state.messages} handleMessage={this.handleMessage}/>
    	  <ChatBox username={users[1].username} messages={this.state.messages} handleMessage={this.handleMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
