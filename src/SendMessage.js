import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  /*
    Text being saved in the state of SendMessage component
  */
  state = {
    text: '',
  }

  /*
    Disable the send button when the text is empty
  */
  isDisabled = () => {
    if (this.state.text === '')
      return true;
    return false;
  };
  
  /*
    Handle the input change for the textbox
  */
  typingText = event => {
    event.preventDefault();
    this.setState({ text: event.target.value});
  };

  /*
    Submit the new message 
  */
  submit = event => {
    event.preventDefault();
    this.props.handleMessage({username: this.props.user, text: this.state.text});
  }
  
  /*
    Render the UI for the text box component
  */
  render(){
  	return (<div>
      <form className="input-group" onSubmit={this.submit}>
        <input type="text" className="form-control" 
          placeholder="Enter your message..." value ={this.state.text} onChange={this.typingText} />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()}>
            SEND
          </button>
        </div>
      </form>
    </div>);
  }
}

/*
  Define PropType for arguments
*/
SendMessage.propTypes = {
  user: PropTypes.string.isRequired,
  handleMessage : PropTypes.func.isRequired,
}

export default SendMessage;