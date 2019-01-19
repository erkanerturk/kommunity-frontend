// TODO consider using dayjs instead
import _debounce from 'lodash.debounce';
import _get from 'lodash.get';
import { graphql } from 'react-apollo';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@/components/ui';
import { FETCH_MESSAGES, SUBSCRIBE_MESSAGE_SENT } from '../requests';

const TIMESTAMP_FORMAT = 'MM/DD/YYYY h:mm';

class MessageList extends React.Component {
  state = {
    scrollHeight: 0,
  };

  componentDidMount() {
    const { channelUUID, listRef, messages } = this.props;

    listRef.current.addEventListener('scroll', this.onListScroll);

    messages.subscribeToMore({
      document: SUBSCRIBE_MESSAGE_SENT,
      updateQuery: (prev, { subscriptionData }) => {
        const oldMessagesClone = JSON.parse(JSON.stringify(prev.getMessagesForChannel.messages));
        if (!subscriptionData.data) {
          return prev;
        }
        const newMessage = subscriptionData.data.messageSent;
        oldMessagesClone.push(newMessage);
        return Object.assign({}, prev, {
          getMessagesForChannel: {
            ...prev.getMessagesForChannel,
            messages: oldMessagesClone,
          },
        });
      },
      variables: {
        channelUUID,
      },
    });
  }

  componentDidUpdate(prevProps) {
    const { listRef } = this.props;
    const { scrollHeight } = this.state;
    const prevMessagesCount = _get(prevProps, 'messages.getMessagesForChannel.messages.length');
    const nextMessagesCount = _get(this.props, 'messages.getMessagesForChannel.messages.length');
    // initial fetch
    if (prevMessagesCount === undefined && nextMessagesCount) {
      this.scrollToBottom();
    }

    // new message, while user is reading the latest messages
    else if (prevMessagesCount < nextMessagesCount) {
      if (listRef.current.scrollTop < 20) {
        listRef.current.scrollTo(0, listRef.current.scrollHeight - scrollHeight);
      } else {
        this.scrollToBottom();
      }
    }
  }

  onListScroll = _debounce(e => {
    const {
      listRef,
      messages: { getMessagesForChannel },
    } = this.props;
    if (e.target.scrollTop < 10 && getMessagesForChannel.nextCursor) {
      const { channelUUID, messages } = this.props;
      messages.fetchMore({
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }
          this.setState({
            scrollHeight: listRef.current.scrollHeight,
          });
          return Object.assign({}, prev, {
            getMessagesForChannel: {
              ...prev.getMessagesForChannel,
              messages: [
                ...fetchMoreResult.getMessagesForChannel.messages,
                ...prev.getMessagesForChannel.messages,
              ],
              nextCursor: fetchMoreResult.getMessagesForChannel.nextCursor,
            },
          });
        },
        variables: {
          channelUUID,
          cursor: messages.getMessagesForChannel.nextCursor,
        },
      });
    }
  }, 400);

  scrollToBottom = () => {
    const { listRef } = this.props;
    listRef.current.scrollTo(0, 99999);
  };

  render() {
    const { messages } = this.props;
    return (
      <div className="w-full flex">
        <div className="flex-1 text-left">
          {messages.loading ? (
            <Loading />
          ) : (
            messages.getMessagesForChannel.messages
              .sort((a, b) => parseInt(a.ts, 10) - parseInt(b.ts, 10))
              .map(m => (
                <div key={m.uuid} className="group py-2">
                  <div className="flex text-lightBlueGrey group">
                    <div className="flex-1">
                      {m.sender.firstName} {m.sender.lastName}
                    </div>
                    <div className="text-xs invisible group-hover:visible">
                      {moment(m.createdAt, moment.defaultFormat).format(TIMESTAMP_FORMAT)}
                    </div>
                  </div>
                  <div>{m.text}</div>
                </div>
              ))
          )}
        </div>
      </div>
    );
  }
}

MessageList.propTypes = {
  channelUUID: PropTypes.string,
  listRef: PropTypes.instanceOf(PropTypes.node),
  messages: PropTypes.shape({
    getMessagesForChannel: PropTypes.func,
    subscribeToMore: PropTypes.func,
  }),
};

export default graphql(FETCH_MESSAGES, {
  name: 'messages',
  options: props => ({
    variables: {
      channelUUID: props.channelUUID,
    },
  }),
})(MessageList);
