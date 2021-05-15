import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';

const App = () => {
  return (
    <div className="app">
      <Disclaimer />
    </div>
  );
};

export default App;
