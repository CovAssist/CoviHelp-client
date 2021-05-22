import React, { useState } from 'react';
import { ListItemsO } from './ListItemsO';
import '../List/List.css';

const List = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="list">
      {ListItemsO.map((item, index) => {
        return (
          <>
            <div onClick={() => toggle(index)} key={index} className="itemone">
              <div className="simple__list">
                <div className="simpplist">
                  <div className="simpplist__title">{item.storeName}</div>
                  <div className="simpplist__time">{item.lastVerified}</div>
                </div>
              </div>
            </div>
            {clicked === index ? (
              <div className="clicked__list">
                <div className="clicked__top">
                  <div className="clicked__elem">
                    <div className="clicked__heading">Store Name</div>
                    <div className="clicked__bold clicked__filing">{item.storeName}</div>
                  </div>
                  <div className="clicked__elem">
                    <div className="clicked__heading">Last Time Verified</div>
                    <div className="clicked__filing">{item.lastVerified}</div>
                  </div>
                </div>
                <div className="clicked__bot">
                  <div className="clicked__elem">
                    <div className="clicked__heading">Address</div>
                    <div className="clicked__filing">{item.address}</div>
                  </div>
                  <div className="clicked__elem">
                    <div className="clicked__heading">Phone no.</div>
                    <div className="clicked__filing">{item.phone}</div>
                  </div>
                  <div className="clicked__elem">
                    <div className="clicked__heading">Details</div>
                    <div className="clicked__filing">{item.details}</div>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};
export default List;
