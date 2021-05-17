import React, { useState } from 'react';

import './List.css';


function SimpList() {
  return (
    <div className="simple__list">
      <div className="simpplist">
        <div className="simpplist__title">this is A Hospital</div>
        <div className="simpplist__time">21 May 2021, Time</div>
      </div>
    </div>
  );
}

function ClickedList() {
  return (
    <div className="clicked__list">
      <div className="clicked__top">
        <div className="clicked__elem">
          <div className="clicked__heading">Hospital Name</div>
          <div className="clicked__bold clicked__filing">This That Hospital</div>
        </div>
        <div className="clicked__elem">
          <div className="clicked__heading">Last Time Verified</div>
          <div className="clicked__filing">1 May 2021, 5:00PM</div>
        </div>
      </div>
      <div className="clicked__bot">
        <div className="clicked__elem">
          <div className="clicked__heading">Address</div>
          <div className="clicked__filing">Content here, content here</div>
        </div>
        <div className="clicked__elem">
          <div className="clicked__heading">Phone no.</div>
          <div className="clicked__filing">+91 0000000000</div>
        </div>
        <div className="clicked__elem">
          <div className="clicked__heading">Details</div>
          <div className="clicked__filing">Content here, content here</div>
        </div>
      </div>
    </div>
  );
}

function List() {
  const [CLicked, setCLicked] = useState(true);
  return <div className="list">{CLicked ? <ClickedList /> : <SimpList />}</div>;
}

export default List;
