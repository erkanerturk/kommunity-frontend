import React from 'react';
import { Query } from 'react-apollo';
import CommunityMembers from '@/components/pages/community-members';
import Loading from '@/components/ui/loading';
import { COMMUNITY_MEMBERS } from '@/containers/query';


const CommunityMembersContainer = ({ match }) => (
  <Query query={COMMUNITY_MEMBERS} variables={{ uuid: match.params.communityUuid }}>
    {({ loading, error, data }) => {
      // console.log("match.params:", match.params);
      if (loading) {
        return <Loading />;
      }
      // TODO style error message
      if (error) {
        return <div className="text-center">Sorry, we couldnt fetch community members.</div>;
      }
      return <CommunityMembers communityMembers={data.getCommunityMembers} />;
    }}
  </Query>
);

export default CommunityMembersContainer;
