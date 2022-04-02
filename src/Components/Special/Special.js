import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(ringContext)
    return (
        <div>
            <h5>Special</h5>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Special;