// TODO consider using dayjs instead
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon, Input } from '@/components/ui';
import { SEND_MESSAGE } from '../requests';

const SENDER_UUID = '3346776a-d69d-11e8-9f8b-f2801f1b9fd1';

class ChatInput extends React.Component {
  state = {
    message: '',
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.addEventListener('keyup', event => {
      event.preventDefault();
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        this.sendMessage();
      }
    });
  }

  sendMessage = () => {
    const { message } = this.state;
    const { channelUUID, sendMessage } = this.props;
    if (!message.trim()) {
      return;
    }
    sendMessage({
      variables: {
        channelUUID,
        senderUUID: SENDER_UUID,
        text: message,
      },
    })
      .then(() => this.setState({ message: '' }))
      // TODO handle error
      .catch(() => {});
  };

  setInputRef = node => {
    this.inputRef = node;
  };

  render() {
    const { message } = this.state;
    return (
      <div className="w-full">
        <Input
          setRef={this.inputRef}
          onChange={e => this.setState({ message: e.target.value })}
          extraClassName="w-full block"
          name="message-input"
          value={message}
          placeholder=""
          iconRight={
            <Icon name="Send" className="text-primary cursor-pointer" onClick={this.sendMessage} />
          }
          extraWrapperClassName="my-4"
        />
      </div>
    );
  }
}

ChatInput.propTypes = {
  channelUUID: PropTypes.string,
  sendMessage: PropTypes.func,
};

export default graphql(SEND_MESSAGE, {
  name: 'sendMessage',
})(ChatInput);
