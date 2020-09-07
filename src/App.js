import React from 'react';
import './css/app.css';
import Navbar from './components/navbar';
import Main from './components/main'
import AdvanceSearch from './components/AdvanceSearch';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <AdvanceSearch />
    </div>
  );
}

export default App;
