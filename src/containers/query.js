import gql from 'graphql-tag';

export const POPULAR_COMMUNITIES = gql`
  {
    popularCommunities {
      uuid
      name
      tagline
      desc
      location
      userCount
    }
  }
`;
export const NAVBAR_SEARCH = queryText => gql`
  {
    searchUsers(queryText:"${queryText}"){
      username
      avatarUploadUuid
      firstName
      lastName
    }
    searchCommunities(name:"${queryText}"){
      name
      tagline
    }
  }
`;

export const COMMUNITY_MEMBERS = gql`
  query GetCommunityMembers ($uuid: ID!) {
    getCommunityMembers (uuid: $uuid) {
      uuid
      name
      Users {
        firstName
        lastName
      }
    }
  }
`;
