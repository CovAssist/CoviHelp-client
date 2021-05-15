import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import LandingPage from './pages/LandingPage/LandingPage';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/disclaimer">
            <Disclaimer />
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
