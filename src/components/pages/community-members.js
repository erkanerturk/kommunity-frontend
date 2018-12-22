import React from 'react';
import { Title, Icon, Card, Button, Paragraph } from '@/components/ui';

class CommunityMembers extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClickInvite () {
    //TODO: get users using gql and list 
  }

  handleClickEdit () {
    //TODO: edit role and status. mutate using gql
  }

  render() {
    const { name, uuid, Users } = this.props.communityMembers;
    return (
      <div className="container text-center">
        <div className="container py-4">
          <Title type="h2">Community Members Page</Title>
        </div>
        <div className="container py-4">
          <Title type="h5">Community Name: {name}</Title>
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
              {Users.map( ({ firstName, lastName }, index) => (
                  <li key={index.toString()} className="flex items-center p-1 hover:bg-paleGrey">
                    <Paragraph className="inline">{firstName} {lastName}</Paragraph>
                    <Icon 
                    onClick={this.handleClickEdit}
                    name="Edit"
                    className="text-primary ml-3 hover:text-primaryDark" />
                  </li>
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
