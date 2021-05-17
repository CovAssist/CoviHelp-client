import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import List from './components/List/List';
import VaccantBed from './pages/VaccantBed/VaccantBed';
import LandingPage from './pages/LandingPage/LandingPage';
import DonorRegistration from './pages/DonorRegistration/DonorRegistration';
import Volunteer from './pages/VolunteerRegistration/Volunteer';

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
          <Route path="/bed">
            <VaccantBed />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/Volunteer">
            <Volunteer />
          </Route>
          <Route path="/DonorRegistration">
            <DonorRegistration />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
