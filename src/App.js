/* dependency */
import React from 'react';

/* css */
import './App.css';
import './components/dropdown.css';

/* components */
import Dropdown from './components/dropdown';
import Header from './components/header';
import DropdownItems from './components/dropdownItems';
import dropdownItems2 from './components/dropdownItems2';
import Webpages from './webpages';


function App() {
  
  return (
    <div className="App">
      <div className ="App">
        <Header/>
      </div>
      <div className ="App">
        <Dropdown items= {DropdownItems}/>
        <Dropdown items= {dropdownItems2}/>
      </div>
      <div>
      </div>
    </div>
  );
};

export default App;