import React from 'react';
import MemoryRouter from 'react-router-dom/MemoryRouter';

import { shallow } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
import client from '@/api/apollo';
import Home from '@/components/pages/home';

describe('Components: <Home />', () => {
  test('renders without exploding', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <ApolloProvider client={client}>
          <Home/>
        </ApolloProvider>
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('div');
  });
});
