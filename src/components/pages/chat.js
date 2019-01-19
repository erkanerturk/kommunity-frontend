import React from 'react';
import Header from '@/components/common/header';
import { Button, Input } from '@/components/ui';
import ChatInput from './chat/input';
import ChannelList from './chat/channel-list';
import MessageList from './chat/message-list';

const CHANNEL_UUID = '23ea1110-d6a1-11e8-9f8b-f2801f1b9fd1';

export class Chat extends React.Component {
  state = {
    isChatStarted: false,
    username: '',
  };

  listRef = React.createRef();

  onNameChange = e => {
    this.setState({
      username: e.target.value,
    });
  };

  startChat = () => {
    const { username } = this.state;
    if (username.trim()) {
      this.setState({
        isChatStarted: true,
      });
    }
  };

  render() {
    const { isChatStarted, username } = this.state;
    return (
      <div className="flex flex-col h-full">
        <div className="bg-gray-gradient">
          <div className="container">
            <Header />
          </div>
        </div>
        <div ref={this.listRef} className="container flex-1 overflow-auto">
          <div className="mx-auto p-2 w-full text-center flex flex-col justify-center">
            {isChatStarted ? (
              <React.Fragment>
                <ChannelList channelUUID={CHANNEL_UUID} />
                <MessageList
                  listRef={this.listRef}
                  channelUUID={CHANNEL_UUID}
                  username={username}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Input
                  placeholder="Enter your name"
                  value={username}
                  onChange={this.onNameChange}
                />
                <Button
                  extraClassName="ml-4"
                  label="Join Chat!"
                  onClick={this.startChat}
                  styleType="primary"
                />
              </React.Fragment>
            )}
          </div>
        </div>
        {isChatStarted && (
          <div className="container">
            <ChatInput channelUUID={CHANNEL_UUID} username={username} />
          </div>
        )}
      </div>
    );
  }
}

export default Chat;
