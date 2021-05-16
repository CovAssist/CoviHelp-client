import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import LandingPage from './pages/LandingPage/LandingPage';
import DonorRegistration from './pages/DonorRegistration/DonorRegistration';

const App = () => {
  const [modal, setmodal] = useState(false);
  
  const openModal = () => {
    setmodal((prev) => !prev);
  };
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/disclaimer">

            <Disclaimer modal={modal} setmodal={setmodal} />
            <button onClick={openModal}>showModal</button>
          </Route>
          <Route path="/">
            <LandingPage />
            <DonorRegistration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
