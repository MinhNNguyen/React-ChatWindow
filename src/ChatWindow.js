import React from 'react';
import PropTypes from 'prop-types';

/*
  Render the UI for the ChatWindow
*/
const ChatWindow = props => {
  return (<ul className="message-list">
    {props.messages.map((message, index) => (
      <li key={index} className={
        message.username === props.user ? 'message sender' : 'message recipient'}>
        <p>{`${message.username}: ${message.text}`}</p>
      </li>
    ))}
  </ul>);
};

/*
  Define PropType for arguments
*/
ChatWindow.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;