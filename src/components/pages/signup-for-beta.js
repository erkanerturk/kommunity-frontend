import React, { Component } from 'react';
import cls from 'classnames';
import Header from '../common/header';
import { Title, Paragraph, Button, Input, Popup } from '@/components/ui';
import { mailPattern } from '@/constants';

const commonStyles = {
  backgroundRepeat: 'no-repeat',
  objectFit: 'contain',
};

const backgroundElements = [
  {
    className: 'absolute pin-b pin-l',
    style: {
      ...commonStyles,
      height: '232px',
      width: '261px',
    },
    svgPath: '/images/landing/bottom-left.svg',
  },
  {
    className: 'absolute pin-b pin-r',
    style: {
      ...commonStyles,
      height: '526px',
      width: '521px',
    },
    svgPath: '/images/landing/bottom-right.svg',
  },
  {
    className: 'absolute pin-t pin-l',
    style: {
      ...commonStyles,
      height: '189px',
      width: '191px',
    },
    svgPath: '/images/landing/top-left.svg',
  },
];

const styles = {
  shareButtons: 'w-full mx-2 h-14 font-bold',
  subscribeButton:
    'absolute text-white font-bold w-4/12 pin-r pin-t h-full bg-primary rounded-tr-full rounded-br-full',
  subscribeInput:
    'border focus:border-primary focus:text-dark w-full h-14 border-lightBlueGrey rounded-full',
};

class SignupBeta extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      showPopup: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      showPopup: true,
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClosePopup = () => {
    this.setState({
      showPopup: false,
    });
  };

  render() {
    const { email, showPopup } = this.state;
    return (
      <React.Fragment>
        {backgroundElements.map((element, i) => (
          <div
            className={element.className}
            key={i.toString()}
            style={{ backgroundImage: `url(${element.svgPath})`, ...element.style }}
          />
        ))}
        <div className="container">
          <Header extraClassName="justify-between" inline>
            <Paragraph extraClassName="text-blueyGrey">
              Beta program will launch as soon as possible
            </Paragraph>
          </Header>
          <div className="flex mt-32">
            <div className="w-2/4 pr-12">
              <Title type="h2" extraClassName="font-bold my-8">
                Join, Start and Create Online Communities
              </Title>
              <Paragraph type="2xl" extraClassName="text-battleshipGrey mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa voluptate.
              </Paragraph>
              <form onSubmit={this.handleSubmit}>
                <Paragraph type="base" extraClassName="text-battleshipGrey mb-1">
                  Signup for beta:
                </Paragraph>
                <div className="input-group relative">
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleInputChange}
                    pattern={mailPattern}
                    extraClassName={styles.subscribeInput}
                    placeholder="Mail Address"
                  />
                  <Button
                    extraClassName={styles.subscribeButton}
                    styleType="primary"
                    size="medium"
                    label="Subscribe"
                    type="submit"
                  />
                </div>
              </form>
            </div>
            <div className="w-2/4 pl-12">
              <img
                className="pointer-events-none"
                src="/images/landing/illustration.svg"
                alt="Hey!"
              />
            </div>
          </div>
        </div>
        <Popup show={showPopup} wrapperExtraClassName="text-center" onClose={this.onClosePopup}>
          <img className="pointer-events-none" src="/images/landing/window.svg" alt="Hey!" />
          <Title type="h5" extraClassName="font-extrabold mt-6 mb-2">
            Thanks for signing up!
          </Title>
          <Paragraph extraClassName="mb-8">Show some love for makers :)</Paragraph>
          <div className="buttons flex justify-around">
            <Button
              extraClassName={cls(styles.shareButtons, 'bg-twitter')}
              styleType="primary"
              size="medium"
              label="Tweet"
              type="button"
              iconLeft="Twitter"
            />
            <Button
              extraClassName={cls(styles.shareButtons, 'bg-facebook')}
              styleType="primary"
              size="medium"
              label="Share"
              type="button"
              iconLeft="Facebook"
            />
          </div>
        </Popup>
      </React.Fragment>
    );
  }
}

export default SignupBeta;
