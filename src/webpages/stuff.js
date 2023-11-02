import React, { useEffect } from 'react';

const Stuff = () => {
    useEffect(() => {
        document.title = 'My Stuff for Demo';
    });
    return(
        <div>
            <p>This is stuff</p>
        </div>
    );
};

export default Stuff;