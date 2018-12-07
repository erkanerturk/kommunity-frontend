import React from 'react';
import Header from '@/components/common/header';
import FeaturedCommunities from './home/featured-communities';
import Footer from '@/components/common/footer';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HomeHero from './home/hero';
import Features from './home/features';
import Testimonials from './home/testimonials';
import Pricing from './home/pricing';

// Testing apollo client
// will be deleted
const TEST_GQL = gql`
      {
        allPersons {
          name 
          films {
            director
          }
        }
      }
    `;

const TestComp = () => (
  <Query query={TEST_GQL}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      return (
        <p>
          Person: {data.allPersons[0].name}
        </p>
      );
    }}
  </Query>
);
//

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-gray-gradient">
          <div className="container">
            <Header/>
            <div className="home py-24">
              <HomeHero/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="featured-communities mt-10 pt-20">
            <FeaturedCommunities/>
          </div>
          <div className="features mt-10 pt-20">
            <Features/>
          </div>
        </div>
        <div className="bg-primary mt-32">
          <div className="container">
            <div className="testimonials pt-20 pb-32">
              <Testimonials/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="featured-communities mt-32">
            <Pricing/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
