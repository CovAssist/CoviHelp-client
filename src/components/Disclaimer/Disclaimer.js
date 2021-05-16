import React from 'react';
import './Disclaimer.css';

function Disclaimer({ modal, setmodal }) {
  return (
    <>
      {modal ? (
        <div className="modal">
          <div className="disclaimerBox">
            <div className="container">
              <div className="disclaimer">DISCLAIMER</div>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta pulvinar massa,
                eu lacinia lectus. Quisque eget purus quis est auctor fringilla. In dignissim
                consectetur ipsum ac placerat. Quisque viverra purus pellentesque ultricies pretium.
                Nullam tortor enim, volutpat et enim a, faucibus auctor risus. Morbi eu molestie
                massa. Integer vel dui in quam pulvinar viverra a id lectus. Maecenas interdum
                sapien ipsum, in pellentesque velit blandit gravida.
              </div>
              <button className="btn" onClick={() => setmodal((prev) => !prev)}>
                {' '}
                Accept{' '}
              </button>
            </div>
            <img
              className="image__disclaimer"
              src="https://raw.githubusercontent.com/manikmmalhotra/portfolio_site/5dbeb685a87e6f1708772f4d57c9fe7741c073e2/dis1.svg"
              alt=""
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Disclaimer;
