import React from 'react';
import List from '../../components/List/List';
import MainHeader from '../../components/MainHeader/MainHeader';
import './VaccantBed.css';

function VaccantBed() {
  return (
    <div className="vaccant">
      <MainHeader />
      <div className="vaccant__dash">
        <div className="vaccant__dashboard">
          <div className="vaccant__title">Dashboard</div>
          <div className="vaccant__box">
            {' '}
            <div className="box">
              <div className="intotalCasen">3,24,567+</div>
              <div className="intotalCase">Total Beds</div>
            </div>
            <div className="box">
              <div className="intotalVac">3,24,567+</div>
              <div className="intotalVacn">Total Occupied</div>
            </div>
            <div className="box">
              <div className="intotalRecovern">3,24,567+</div>
              <div className="intotalRecover">Total Vacant</div>
            </div>
          </div>
        </div>
        <div className="vaccant__beds">
          <div className="vaccant__title">Vaccant Beds Available</div>
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
      </div>
    </div>
  );
}

export default VaccantBed;
