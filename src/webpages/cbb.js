import React, { useEffect } from 'react';

const CBB = () => {
    useEffect(() => {
        document.title = 'Circuit Breaker Bookings';
    });
    return(
        <div>
            <h1>Circuit Breaker Bookings</h1>
            <p>This is CBB</p>
        </div>
    );
};

export default CBB;