/* eslint-disable */
import React from 'react';
import { Icon, Input, Paragraph } from '@/components/ui';
import '@/css';

const MailSignup = () => {
  return (
    <div>
      <Paragraph className="leading-base text-blueyGrey text-xs mb-6 uppercase tracking-tight">
        Newsletter
      </Paragraph>
      <Paragraph>Subscribe to our updates</Paragraph>
      <Input
        extraClassName="w-full block"
        name="email"
        type="email"
        placeholder="Your mail adress"
        iconRight={<Icon name="Send" className="text-primary cursor-pointer" />}
        extraWrapperClassName="my-4"
      />
    </div>
  );
};

export default MailSignup;
