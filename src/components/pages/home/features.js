import React from 'react';
import {
  Button, Icon, Paragraph, Title,
} from '@/components/ui';

const features = [
  {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'Search',
    label: 'Feature Title',
  },
  {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'Package',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'Home',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'List',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'MessageCircle',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'PlusSquare',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'Star',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'UploadCloud',
    label: 'Feature Title',
  }, {
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    icon: 'Wind',
    label: 'Feature Title',
  },
];

const Features = () => (
  <div>
    <Title type="h5" extraClassName="text-center font-bold mb-14">
      All in one for amazing communities
    </Title>
    <div className="flex flex-wrap justify-between">
      {features.map((feature, index) => (
        <div key={index} className="flex w-4/12 mb-4 py-8">
          <div className="mr-6">
            <Icon name={feature.icon} className="text-primary"/>
          </div>
          <div>
            <Paragraph extraClassName="font-bold mb-2 mr-20">
              {feature.label}
            </Paragraph>
            <Paragraph extraClassName="text-gunmetal mr-20">
              {feature.desc}
            </Paragraph>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <Button
        label="Create Community"
        styleType="primary"
        size="large"
        extraClassName="mt-10 mb-6"/>
      <Paragraph type="xs" extraClassName="text-blueyGrey">
        No credit card required, create communities in minutes
      </Paragraph>
    </div>
  </div>
);

Features.propTypes = {};

export default Features;
