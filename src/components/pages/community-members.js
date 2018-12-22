import React from 'react';
import { Title, Icon, Paragraph, Button } from '@/components/ui';

class CommunityMembers extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClickInvite () {
    //TODO: 
  }

  render() {
    const { name, uuid, Users } = this.props.communityMembers;
    console.log(Users);
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
          styleType="secondary"
          onClick={this.handleClickInvite}
          extraClassName="m-4"
          />
          <Title type="h5">Community Userslist</Title>

          {
            // TODO: Icon component crashes!
            // <div className="mr-6">
            //  <Icon name="edit-3" className="text-primary" />
            // </div> 
          }
          
          <div className="p-2">
            <ul className="list-reset">
              {Users.map( ({ firstName, lastName }, index) => (
                <div key={index.toString()} className="py-2">
                  <li>
                    <b>User:</b> {`${firstName} ${lastName}`}
                  </li>
                </div>
              ))}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default CommunityMembers;
