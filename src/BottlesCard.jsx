/* eslint-disable no-unused-vars */
import React from 'react';

const BottlesCard = ({ bottle }) => {

    const {id,name, position} = bottle;

    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default BottlesCard;