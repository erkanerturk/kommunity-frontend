import React from 'react';
import { Provider } from 'react-redux';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import setupStore from '@/state/store';
import App from '@/components/app';
import { ApolloProvider } from 'react-apollo';
import client from '@/api/apollo';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const history = createMemoryHistory();
    const store = setupStore(history, {});

    const wrapper = mount(
      <ApolloProvider client={client}>
        <Provider store={store}>
          <MemoryRouter>
            <App/>
          </MemoryRouter>
        </Provider>
      </ApolloProvider>,
    );
    expect(wrapper.html()).toContain('header');
  });
});
