import PropTypes from 'prop-types';
import React from 'react';
// import { graphql } from 'react-apollo';

import { Dropdown, Icon } from '@/components/ui';
// import { CHANGE_ROLE, CHANGE_STATUS } from '@/components/pages/requests';

class User extends React.Component {
  state = {
    editMode: false,
  };

  // eslint-disable-next-line no-unused-vars
  handleSelectStatus = status => {
    // TODO: update user status through gql on backend
    // console.log(`Status change requested: '${status}' for uuid: ${this.props.user.uuid}`);
    // graphql(CHANGE_STATUS, {
    //   options: props => ({
    //     variables: {
    //       userUuid: this.props.user.uuid,
    //       status: status,
    //     },
    //   }),
    // });
  };

  // eslint-disable-next-line no-unused-vars
  handleSelectRole = role => {
    // TODO: update user role through gql on backend
    // console.log(`Role change requested: '${role}' for uuid: ${this.props.user.uuid}`);
    // graphql(CHANGE_ROLE, {
    //   options: props => ({
    //     variables: {
    //       userUuid: this.props.user.uuid,
    //       role: role,
    //     },
    //   }),
    // });
  };

  handleClickEdit = () => {
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
    const { editMode } = this.state;
    return (
      <li className="flex items-center text-left p-1 hover:bg-paleGrey">
        <div className="flex-1 mx-1">{firstName}</div>
        <div className="flex-1 mx-1">{lastName}</div>
        <div className="flex-1 mx-1">
          {editMode ? (
            <Dropdown
              options={[
                { id: 'owner', value: 'owner' },
                { id: 'member', value: 'member' },
                { id: 'moderator', value: 'moderator' },
              ]}
              selectedOption={role}
              onSelect={this.handleSelectRole}
            />
          ) : (
            <div className="flex-1 mx-1">{role}</div>
          )}
        </div>
        <div className="flex-1 mx-1">
          {editMode ? (
            <Dropdown
              options={[
                { id: 'approved', value: 'approved' },
                { id: 'banned', value: 'banned' },
                { id: 'invited', value: 'invited' },
              ]}
              selectedOption={status}
              onSelect={this.handleSelectStatus}
            />
          ) : (
            <div className="flex-1 mx-1">{status}</div>
          )}
        </div>
        <div className="mx-1">
          <Icon
            onClick={this.handleClickEdit}
            name="Edit"
            className="text-primary hover:text-primaryDark cursor-pointer"
          />
        </div>
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

export default User;
