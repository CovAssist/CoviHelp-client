import React, { useEffect, useState, useContext } from 'react';
import { getListData as getVacantBeds } from '../../api/index';
import { ContextProvider } from '../../contextapi';
import './List.css';

const List = () => {
  const [clicked, setClicked] = useState(false);
  const [listItems, setListItems] = useState([]);
  const { searchBeds } = useContext(ContextProvider);
  useEffect(() => {
    const insertData = async () => {
      const data = await getVacantBeds(searchBeds, 'beds');
      console.log(data);
      if (data && data.data) {
        setListItems(data.data.data);
      }
    };
    insertData();
  }, [searchBeds]);
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
          <React.Fragment key={index}>
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
                    <div className="clicked__heading">City</div>
                    <div className="clicked__filing">{item.hoscity}</div>
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
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default List;
