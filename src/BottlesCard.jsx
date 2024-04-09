/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const BottlesCard = ({ bottle }) => {

    const {  name, position } = bottle;


    const teamStyle = {

        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '16px',
    }


    return (
        <div style={teamStyle}>
            <h2>{name}</h2>
            <button onClick={}>Purchase</button>
        </div>
    );
};

export default BottlesCard;