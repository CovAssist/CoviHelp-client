import React from 'react';
import Footer from '../../components/Footer/Footer';
import OxygenList from '../../components/OxygenList/OxygenList';
import MainHeader from '../../components/MainHeader/MainHeader';
import './Oxygen.css';
import '../VaccantBed/VaccantBed.css';

function Oxygen() {
  return (
    <div className="oxygen">
      <MainHeader />
      <div className="vaccant__beds">
        <div className="vaccant__title">Oxygen Availbility</div>
        <div className="vaccant__list">
          <div className="vaccant__ylw">
            <b>Latest Leads*</b>
          </div>
          <div className="vaccant__lists">
            <OxygenList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Oxygen;
