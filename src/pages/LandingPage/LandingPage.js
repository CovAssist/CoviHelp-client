import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import LastPart from '../../components/LastPart/LastPart';
import MidPart from '../../components/MidPart/MidPart';
import Footer from '../../components/Footer/Footer';

function LandingPage() {
  return (
    <div className="landing">
      <div className="first">
        {' '}
        <MainHeader />
      </div>
      <div className="first">
        {' '}
        <MidPart />
      </div>
      <div className="first">
        {' '}
        <LastPart />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
