import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import News from './Components/News';

function App() {
  return (
    <div className="App">
     <p className="bg-primary">His is react bootstrap practice</p>
     <News></News>
    </div>
  );
}

export default App;
