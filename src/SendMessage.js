import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  state = {
    text: '',
  }

  isDisabled = () => {
    if (this.state.text === '')
      return true;
    return false;
  };
  
  typingText = event => {
    event.preventDefault();
    this.setState({ text: event.target.value});
  };

  submit = event => {
    event.preventDefault();
    this.props.handleMessage(props.user, this.state.text);
  }
  
  render(){
  	return (<div>
      <form className="input-group" onSubmit="{this.submit}">
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

SendMessage.propTypes = {
  user: PropTypes.string.isRequired,
  handleMessage : PropTypes.func.isRequired,
}

export default SendMessage;