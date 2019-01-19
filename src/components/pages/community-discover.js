import React from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import MostActiveMembers from '@/components/common/most-active-members';

const CommunityDiscover = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-gray-gradient">
        <div className="container">
          <Header />
          <div className="flex flex-wrap">
            <div className="w-6/12">
              <h1>Latest Messages</h1>
              <div>...</div>
            </div>
            <div className="w-6/12">
              <h1>Most Active Members</h1>
              <MostActiveMembers />
            </div>
            <div className="w-6/12">
              <h1>Online Members</h1>
              <div>...</div>
            </div>
            <div className="w-6/12">
              <h1>Upcoming Events</h1>
              <div>...</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CommunityDiscover;
