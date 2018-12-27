import gql from 'graphql-tag';

export const COMMUNITY_MEMBERS = gql`
  query getCommunityMembers($uuid: ID!) {
    getCommunityMembers(uuid: $uuid) {
      uuid
      name
      users {
        firstName
        lastName
        CommunityUser {
          role
          status
        }
      }
    }
  }
`;

export const CHANGE_ROLE = gql`
  mutation changeRole($userUuid: String, $role: String) {
    changeRole(userUuid: $userUuid, role: $role) {
      userUuid
      role
    }
  }
`;

export const CHANGE_STATUS = gql`
  mutation changeStatus($userUuid: String, $status: String) {
    changeStatus(userUuid: $userUuid, status: $status) {
      userUuid
      status
    }
  }
`;
