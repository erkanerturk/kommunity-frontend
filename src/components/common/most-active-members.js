import React from 'react';
import { graphql } from 'react-apollo';
import { FETCH_MOST_ACTIVE_USERS } from '@/containers/query';
import PropTypes from 'prop-types';
import { Loading } from '@/components/ui';

const MostActiveMembers = ({ communityUuid, getMostActiveMembers }) => {
  const { mostActiveMembers, loading, error } = getMostActiveMembers;
  if (error) return <p className="text-red">Error!!!</p>;
  if (loading) return <Loading />;
  return (
    <div className="w-full flex flex-wrap">
      {mostActiveMembers.map(({ firstName, lastName, lastSeenAt, location, uuid }) => (
        <div key={uuid} className="border-2 text-center p-4 w-112">
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{location}</p>
          <p>{lastSeenAt}</p>
          <p>{communityUuid}</p>
        </div>
      ))}
    </div>
  );
};
MostActiveMembers.propTypes = {
  communityUuid: PropTypes.string,
  getMostActiveMembers: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool,
    mostActiveMembers: PropTypes.arrayOf(
      PropTypes.shape({
        avatarUploadUuid: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        lastSeenAt: PropTypes.string,
        location: PropTypes.string,
        uuid: PropTypes.string,
      }),
    ),
  }),
};
export default graphql(FETCH_MOST_ACTIVE_USERS, {
  name: 'getMostActiveMembers',
  options: props => ({
    variables: {
      communityUuid: props.communityUuid,
    },
  }),
})(MostActiveMembers);
