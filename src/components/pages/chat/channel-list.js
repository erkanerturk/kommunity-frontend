import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import React from 'react';
import { Loading } from '@/components/ui';
import { FETCH_CHANNELS } from '../requests';

const ChannelList = ({ channels }) => {
  if (!channels.getChannels) {
    return null;
  }

  return (
    <div className="w-full flex">
      {channels.loading ? (
        <Loading />
      ) : (
        channels.getChannels.map(channel => (
          <div key={channel.uuid} className="px-2 py-1 text-left">
            <span className="text-lightBlueGrey"># </span>
            <span className="text-gunmetal">{channel.name}</span>
            <span className="text-battleshipGrey">
              {' '}
              <small>({channel.desc})</small>
            </span>
          </div>
        ))
      )}
    </div>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.shape({
    getChannels: PropTypes.func,
    loading: PropTypes.bool,
  }),
};

export default graphql(FETCH_CHANNELS, {
  name: 'channels',
  options: (/* props */) => ({
    variables: {
      communityUUID: '6c52dc16-d6a6-11e8-9f8b-f2801f1b9fd1',
    },
  }),
})(ChannelList);
