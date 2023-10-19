import React from 'react';
import logo from 'C:/Users/matia/vscode/homepage/homepage-demo/src/imgs/placeholderlogo.png'

/* relative path not working / have to figure it out for importing logo */

const Header = () => {
    return (
        <header>
            <img src={logo}
                alt="placeholder logo" 
                height = "200"
            />
        </header>
    );
};

export default Header;