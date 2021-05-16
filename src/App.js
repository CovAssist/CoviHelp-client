import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import { useState } from 'react';
import { Router } from 'express';
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
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
