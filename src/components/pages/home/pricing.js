import React from 'react';
import { Button, Paragraph, Title } from '@/components/ui';
import Card from '../../ui/card';

const pricingOptions = [{
  buttonLabel: 'Create Community',
  buttonType: 'outline',
  currency: '$',
  features: [
    'Up to 100 users',
    '5 GB file storage',
    'Support via online chat, email',
    'Subdomain',
  ],
  label: 'Free',
  period: '/month',
  price: '0',
}, {
  buttonLabel: 'Try free for 15 days',
  buttonType: 'primary',
  currency: '$',
  features: [
    'Up to 1.000 user',
    '40 GB file storage',
    'Prime Support ',
    'Your own domain',
  ],
  label: 'Pro',
  period: '/month',
  price: '39',
}];

const Pricing = () => (
  <div>
    <Title type="h4" extraClassName="font-bold text-center mb-16">
      Choose the plan
    </Title>
    <div className="flex justify-center">
      {pricingOptions.map((pricing, index) => (
        <Card key={index} applyPadding={false} shadow="md" extraClassName="w-4/12 mx-4">
          <Title type="h5" extraClassName="font-bold px-10 py-6">
            {pricing.label}
          </Title>
          <div className="flex bg-paleGrey px-10 py-5">
            <div className="text-5xl leading-xl font-bold mr-1">
              {pricing.price}
            </div>
            <div className="flex flex-1 flex-col">
              <Paragraph extraClassName="font-bold">{pricing.currency}</Paragraph>
              <Paragraph extraClassName="text-blueyGrey" type="sm">{pricing.period}</Paragraph>
            </div>
          </div>
          <div className="px-10 pt-6 py-8">
            {pricing.features.map((feature, featureIndex) => (
              <Paragraph key={featureIndex} extraClassName="text-dark mb-4">{feature}</Paragraph>
            ))}
            <div className="text-center">
              <Button
                extraClassName="mx-auto mt-2"
                label={pricing.buttonLabel}
                styleType={pricing.buttonType}
                size="large"/>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

Pricing.propTypes = {};

export default Pricing;
