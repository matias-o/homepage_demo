import logo from './logo.svg';
import './App.css';
import './components/dropdown.css';
import React from 'react';
import Dropdown from './components/dropdown';


function App() {

  /* Dynamic dropdown menu items w/ urls */

  const dropdownItems = [
    {text: "Item 1", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
    {text: "Item 2", url: "/item2"},
    {text: "Item 3", url: "/item3"},
    {text: "Item 4", url: "/item4"}
  ];
  
  return (
    <div className="App">
      <div className ="App">
        <Dropdown items= {dropdownItems}/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;