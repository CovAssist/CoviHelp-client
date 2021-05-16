import React, { useState } from 'react';
import { ListItems } from './ListItems';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './List.css';

const AccordionSection = styled.div`
  ${
    '' /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff; */
  }
`;

const Container = styled.div`
  ${
    '' /* position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3); */
  }
`;

const Wrap = styled.div`
  ${
    '' /* background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  .headName {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  } */
  }
`;

const Dropdown = styled.div`
  background: #30475e;
  color: #fdfdfd;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #30475e;
  border-top: 1px solid #30475e;
  border-radius: 10px;
  p {
    font-size: 1.3rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#30475e', size: '25px' }}>
      <AccordionSection className="accordionSection">
        <Container className="conatiner">
          {ListItems.map((item, index) => {
            return (
              <>
                <Wrap className="wrap" onClick={() => toggle(index)} key={index}>
                  <div className="title">
                    {' '}
                    <div className="headTitle">Hospital Name</div>
                    <div className="headName">{item.hospital}</div>
                  </div>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown classname="dropdown">
                    <div className="sub">
                      {' '}
                      <div className="subTitle">Hospital Name</div>
                      <p className="subname">{item.lastVerified}</p>
                    </div>
                    <div className="sub">
                      {' '}
                      <div className="subTitle">Hospital Name</div>
                      <p className="subname">{item.address}</p>
                    </div>
                    <div className="sub">
                      {' '}
                      <div className="subTitle">Hospital Name</div>
                      <p className="subname">{item.phone}</p>
                    </div>
                    <div className="sub">
                      {' '}
                      <div className="subTitle">Hospital Name</div>
                      <p className="subname">{item.details}</p>
                    </div>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
