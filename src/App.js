import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import VaccantBed from './pages/VaccantBed/VaccantBed';
import LandingPage from './pages/LandingPage/LandingPage';
import DonorRegistration from './pages/DonorRegistration/DonorRegistration';
import PatientRegistration from './pages/PatientRegistration/PatientRegistration';
import Volunteer from './pages/VolunteerRegistration/Volunteer';
import Contact from './pages/Contact/Contact';
import Oxygen from './pages/Oxygen/Oxygen';

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
          <Route path="/Volunteer">
            <Volunteer />
          </Route>
          <Route path="/Oxygen">
            <Oxygen />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/DonorRegistration">
            <DonorRegistration />
          </Route>
          <Route path="/PatientRegistration">
            <PatientRegistration />
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
