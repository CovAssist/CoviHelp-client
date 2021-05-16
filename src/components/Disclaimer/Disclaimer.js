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
              src="https://raw.githubusercontent.com/CovAssist/CoviHelp-client/5f68c20582f84ff988b7ad18ec0639445d441392/src/Assests/dis1.svg?token=APAWVJ7FYKLPLPPH7AH3MRLAUDODC"
              alt=""
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Disclaimer;
