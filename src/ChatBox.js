import React from 'react';
import PropTypes from 'prop-types';
import ChatWindow from './ChatWindow.js';
import SendMessage from './SendMessage.js';



const ChatBox = props => {
  return(<div className="chat-window">
    <h2>Super Awesome Chat</h2>
    <div className="name sender">{props.username}</div>
    <ChatWindow user={props.username} messages={props.messages} />
	<SendMessage user={props.username} handleMessage={props.handleMessage} />
  </div>);
};

ChatBox.propTypes = {
  username: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  handleMessage: PropTypes.func.isRequired,
};
  
export default ChatBox;  
