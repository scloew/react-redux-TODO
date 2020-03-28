import React from 'react';
import './App.css';
import NavComponent from './components/nav-component';

function App() {
  //@todo the color bar behind links doesn't work on resive
  return (
    <div className="App">
      <p>Track your todos</p>
      <NavComponent />
    </div>
  );
}

export default App;
