import React from 'react';
import './Disclaimer.css';

const img = '../../Assests/dis.svg';

function Disclaimer() {
  return (
    <div className="disclaimerBox">
      <div className="container">
        <div className="disclaimer">DISCLAIMER</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta pulvinar massa, eu
          lacinia lectus. Quisque eget purus quis est auctor fringilla. In dignissim consectetur
          ipsum ac placerat. Quisque viverra purus pellentesque ultricies pretium. Nullam tortor
          enim, volutpat et enim a, faucibus auctor risus. Morbi eu molestie massa. Integer vel dui
          in quam pulvinar viverra a id lectus. Maecenas interdum sapien ipsum, in pellentesque
          velit blandit gravida.
        </p>
        <button className="btn"> Accept </button>
      </div>
      <img
        className="image__disclaimer"
        src="https://raw.githubusercontent.com/CovAssist/CoviHelp-client/3d2c3ff6aac248dee41133b9e870dabeb34b7a22/src/Assests/dis.svg?token=APAWVJ566PGW4KNBZ2H23BDAT7TKK"
        alt=""
      />
    </div>
  );
}

export default Disclaimer;
