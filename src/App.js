import './App.css';
import './components/dropdown.css';
import React from 'react';
import Dropdown from './components/dropdown';
import Header from './components/header';
import DropdownItems from './components/dropdownItems';
import dropdownItems2 from './components/dropdownItems2';


function App() {

  /* Dynamic dropdown menu items w/ urls */
  
  return (
    <div className="App">
      <div className ="App">
        <Header/>
      </div>
      <div className ="App">
        <Dropdown items= {DropdownItems}/>
        <Dropdown items= {dropdownItems2}/>
      </div>
    </div>
  );
}

export default App;