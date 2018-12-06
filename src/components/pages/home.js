import React from 'react';
import Header from '@/components/common/header';
import FindCommunities from '@/components/common/find-communities';
import Footer from '@/components/common/footer';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HomeHero from './home/hero';

// Testing apollo client
// will be deleted
const TEST_GQL = gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `;

const TestComp = () => (
  <Query query={TEST_GQL}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      // eslint-disable-next-line no-console
      console.log(data);
      return (
        <p>
          TestComp
        </p>
      );
    }}
  </Query>
);
//

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="home">
          <HomeHero />
          <TestComp />
        </div>
        <div className="find-communities">
          <FindCommunities/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
