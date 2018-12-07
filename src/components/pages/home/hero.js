import React from 'react';
import { Button, Title } from '@/components/ui';

const HomeHero = () => (
  <div className="text-center">
    <Title type="h2" extraClassName="mb-4">
      Join, Start and Create Online Communities
    </Title>
    <Title type="h5" extraClassName="mb-18">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Title>
    <div>
      <Button extraClassName="mr-6" label="Create Community" size="large" styleType="primary"/>
      <Button label="Discover Communities" size="large" styleType="outline"/>
    </div>
  </div>
);

HomeHero.propTypes = {};

export default HomeHero;
