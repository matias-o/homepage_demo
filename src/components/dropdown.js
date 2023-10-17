import React, {useState} from 'react';

function Dropdown({items}){
    const[isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className = "dropdown">
          <button onClick = {toggleDropdown} className="dropdown-toggle">
            Click to Open Dropdown
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {items.map((item, index) => (
                <li key = {index}>
                    <a href = {item.url}> {item.text} </a>
                </li>
              ))}
            </ul>
          )}
        </div>
    );
}

export default Dropdown;