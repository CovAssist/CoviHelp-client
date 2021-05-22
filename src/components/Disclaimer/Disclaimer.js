import React from 'react';
import './Disclaimer.css';

function Disclaimer({ modal, setModal }) {
  return (
    <>
      <div className="modal">
        <div className="disclaimerBox">
          <div className="container">
            <div className="disclaimer">DISCLAIMER</div>
            <div className="para">
            All the information presented here is publicly available. This initiative is non-profit and only for social welfare. We shall not be held liable for any loss that you may incur by relying on this information. We strongly advise you against forwarding advance money to any vendor(s) or service provider(s) in order to safe-guard you from any kind of fraud. Please report to govt administration as well as us if someone is asking some vague amounts. Use of medicines/resources must be done in keeping with the doctor's advice & government policy.
            </div>
            <button className="btn" onClick={() => setModal(true)}>
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
    </>
  );
}

export default Disclaimer;
