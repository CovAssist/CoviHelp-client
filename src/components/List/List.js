import React, { useEffect, useState } from 'react';
import { getVacantBeds } from '../../api/index';
import './List.css';

const List = () => {
  const [clicked, setClicked] = useState(false);
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    const insertData = async () => {
      const data = await getVacantBeds();
      console.log(data);
      if (data) {
        setListItems(data.data.data);
      }
    };
    insertData();
  }, []);
  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="list">
      {listItems.map((item, index) => {
        return (
          <>
            <div onClick={() => toggle(index)} key={index} className="itemone">
              <div className="simple__list">
                <div className="simpplist">
                  <div className="simpplist__title">{item.hosName}</div>
                  <div className="simpplist__time">{item.verificationTime}</div>
                </div>
              </div>
            </div>
            {clicked === index ? (
              <div className="clicked__list">
                <div className="clicked__top">
                  <div className="clicked__elem">
                    <div className="clicked__heading">Hospital Name</div>
                    <div className="clicked__bold clicked__filing">{item.hosName}</div>
                  </div>
                  <div className="clicked__elem">
                    <div className="clicked__heading">Last Time Verified</div>
                    <div className="clicked__filing">{item.verificationTime}</div>
                  </div>
                </div>
                <div className="clicked__bot">
                  <div className="clicked__elem">
                    <div className="clicked__heading">Address</div>
                    <div className="clicked__filing">{item.address}</div>
                  </div>
                  <div className="clicked__elem">
                    <div className="clicked__heading">Phone no.</div>
                    <div className="clicked__filing">{item.hosContact}</div>
                  </div>
                  <div className="clicked__elem">
                    <div className="clicked__heading">Details</div>
                    <div className="clicked__filing">{item.description}</div>
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
