import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'

function App() {
  return (
    <div className="App">
        <Header></Header>
      <div className='app__body'>
        <Sidebar></Sidebar>
        <Feed></Feed>
      </div>
    </div>
  );
}

export default App;
