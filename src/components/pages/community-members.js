import { graphql } from 'react-apollo';
import React from 'react';
import PropTypes from 'prop-types';
import { Loading, Title, Icon, Card, Button, Paragraph } from '@/components/ui';
import gql from 'graphql-tag';
import { COMMUNITY_MEMBERS, CHANGE_ROLE, CHANGE_STATUS } from '@/components/pages/requests';

class User extends React.Component {
  state = {
    editMode: false,
  };

  handleClickEdit = () => {
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  handleClickRole = () => {
    // TODO: edit role mutate using gql
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  handleClickEdit = () => {
    // TODO: edit status. mutate using gql
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode,
    });
  };

  render() {
    const {
      user: {
        firstName,
        lastName,
        CommunityUser: { role, status },
      },
    } = this.props;
    // console.log(this.props.user);
    const { editMode } = this.state;
    return (
      <li className="flex items-center p-1 hover:bg-paleGrey">
        <div className="w-full">
          {firstName} {lastName} Role({role}) Status({status})
        </div>
        <Icon
          onClick={this.handleClickEdit}
          name="Edit"
          className="text-primary ml-3 hover:text-primaryDark cursor-pointer"
        />
        {editMode && (
          <div>
            <Button
              label={` Edit Role (${role})`}
              size="small"
              styleType="plain"
              onClick={this.handleClickRole}
            />
            <Button
              label={` Edit Status (${status})`}
              size="small"
              styleType="plain"
              onClick={this.handleClickStatus}
            />
            <Button
              label="Remove Member"
              size="small"
              styleType="plain"
              onClick={this.handleClickRemove}
            />
          </div>
        )}
      </li>
    );
  }
}

User.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

// eslint-disable-next-line react/no-multi-comp
class CommunityMembers extends React.Component {
  handleClickInvite() {
    // TODO: get users using gql and list
  }

  render() {
    const {
      data: { loading = true, getCommunityMembers: { name = '', users = {} } = {} } = {},
    } = this.props;

    // console.log(this.props);

    return (
      <div className="container text-center">
        {loading ? (
          <Loading />
        ) : (
          <div className="container text-center">
            <div className="container py-4">
              <Title type="h2">Community Members Page</Title>
            </div>
            <div className="container py-4">
              <Paragraph>Community Name: {name}</Paragraph>
              <Button
                label="Invite Members"
                size="small"
                styleType="outline"
                onClick={this.handleClickInvite}
                extraClassName="m-4"
              />
              <Title type="h5">Community Userlist</Title>
              <div className="flex flex-wrap justify-center w-full">
                <Card shadow="lg" applyPadding={false}>
                  <ul className="list-reset p-4">
                    {users.map((user, index) => (
                      <User user={user} key={index.toString()} />
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

CommunityMembers.propTypes = {
  data: PropTypes.shape({
    getCommunityMembers: PropTypes.object,
    name: PropTypes.string,
    users: PropTypes.object,
  }),
};

export default graphql(COMMUNITY_MEMBERS, {
  // name: 'communityMembers',
  options: props => ({
    variables: {
      uuid: props.match.params.communityUuid,
    },
  }),
})(CommunityMembers);
