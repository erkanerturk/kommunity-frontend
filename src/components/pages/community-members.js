import React from 'react';
import { Title, Icon, Card, Button, Paragraph } from '@/components/ui';


class User extends React.Component {
  state = {
    editMode: false
  }
  handleClickEdit = () => {
    //TODO: edit role and status. mutate using gql
    const { editMode } = this.state;
    this.setState({
      editMode: !editMode
    });
  }

  render () {
    const { firstName, lastName } = this.props.user;
    const { editMode } = this.state;
    return (
      <li className="flex items-center p-1 hover:bg-paleGrey">
        <Paragraph className="inline">{firstName} {lastName}</Paragraph>
        <Icon 
        onClick={this.handleClickEdit}
        name="Edit"
        className="text-primary ml-3 hover:text-primaryDark" />
        {
          editMode
          &&
          <div>
            <Button
            label="Edit Role"
            size="small"
            styleType="plain"
            onClick={this.handleClickRole} />
            <Button
            label="Edit Status"
            size="small"
            styleType="plain"
            onClick={this.handleClickStatus} />
            <Button
            label="Remove Member"
            size="small"
            styleType="plain"
            onClick={this.handleClickRemove} />
          </div>
        }
      </li>
    )
  }
}


class CommunityMembers extends React.Component {
  handleClickInvite () {
    //TODO: get users using gql and list 
  }


  render() {
    const { name, Users } = this.props.communityMembers;
    return (
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
          extraClassName="m-4" />
          <Title type="h5">Community Userlist</Title>
          <div className="flex flex-wrap justify-center w-full">
          
          <Card shadow="lg" applyPadding={false}>

            <ul className="list-reset p-4">
              {Users.map((user, index) => (
                  <User user={user} key={index.toString()}/>
              ))}
            </ul>

          </Card>
          </div>

        </div>
      </div>
    );
  }
}

export default CommunityMembers;
