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

export const FETCH_MOST_ACTIVE_USERS = gql`
  query getMostActiveMembers($communityUuid: ID) {
    mostActiveMembers(communityUuid: $communityUuid) {
      firstName
      lastName
      uuid
      avatarUploadUuid
      lastSeenAt
      location
    }
  }
`;