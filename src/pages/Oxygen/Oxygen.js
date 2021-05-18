import React from 'react';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import MainHeader from '../../components/MainHeader/MainHeader';

function Oxygen() {
  return (
    <div className="oxygen">
      <MainHeader />
      <div className="vaccant__beds">
        <div className="vaccant__title">Oxygen Availbility</div>
        <div className="vaccant__list">
          <div className="vaccant__ylw">verified in last 24 hours*</div>
          <div className="vaccant__lists">
            <List />
          </div>
        </div>
        <div className="vaccant__list">
          <div className="vaccant__ylw">verified in last 24 hours*</div>
          <div className="vaccant__lists">
            <List />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Oxygen;
