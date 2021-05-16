import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';

import VaccantBed from './pages/VaccantBed/VaccantBed';
import LandingPage from './pages/LandingPage/LandingPage';

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
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
