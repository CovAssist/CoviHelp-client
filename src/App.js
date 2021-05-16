import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Disclaimer from './components/Disclaimer/Disclaimer';
import { useState } from 'react';

const App = () => {
  const [modal, setmodal] = useState(false);

  const openModal = () => {
    setmodal((prev) => !prev);
  };
  return (
    <div className="app">
      <Disclaimer modal={modal} setmodal={setmodal} />
      <button onClick={openModal}>showModal</button>
    </div>
  );
};

export default App;
