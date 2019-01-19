import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { Card, Input, Title, TextArea, Button, Loading } from '@/components/ui';
import Cropper from '@/components/common/cropper';

class CommunitySettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    /* 
    TODO: bariscc
      Fetch community model on mount and populize state 
    */
    this.setState({
      description: "In this community, we discuss and plan our products' development.",
      imageUrl: 'https://www.fillmurray.com/360/360',
      isLoaded: true,
      title: 'Topluluk Engineers',
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  /* eslint-disable-next-line */
  saveImage = imageData => {
    /*
      TODO: bariscc
      save image to db and update model imageurl
    */
  };

  handleSubmit = e => {
    e.preventDefault();
    /* 
    TODO: bariscc
      update the model
    */
  };

  render() {
    const { title, description, imageUrl, isLoaded } = this.state;

    return (
      <div className="container">
        <Header />
        <div className="w-10/12 mx-auto my-12">
          <Title type="h5" extraClassName="mb-4">
            Update Community Details
          </Title>
          <Card shadow="md">
            {!isLoaded ? (
              <Loading />
            ) : (
              <div className="flex">
                <div className="w-4/12 mr-12">
                  {/* eslint-disable-next-line */}
                  <label className="text-dark leading-base mb-2">Community Avatar</label>
                  <Cropper
                    onSave={this.saveImage}
                    placeHolder={
                      <div
                        className="bg-cover w-32 h-32 overflow-hidden rounded-4"
                        style={{
                          backgroundImage: `url(${imageUrl})`,
                        }}
                      />
                    }
                  />
                </div>
                <div className="w-6/12">
                  <Input
                    extraClassName="mb-6"
                    type="text"
                    id="title"
                    label="Community Name"
                    name="title"
                    value={title}
                    onChange={this.handleInputChange}
                  />
                  <TextArea
                    extraClassName="mb-6"
                    id="description"
                    label="Community Description"
                    /* eslint-disable-next-line */
                    placeholder="Describe your community with a few sentences. For example, what is the purpose and goal of your community? Who are you looking to connect for?"
                    name="name"
                    value={description}
                    onChange={this.handleInputChange}
                  />
                  <Button
                    extraClassName="mb-6"
                    size="medium"
                    styleType="primary"
                    label="Save Changes"
                  />
                </div>
              </div>
            )}
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CommunitySettings;
