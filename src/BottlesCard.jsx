/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const BottlesCard = ({ bottlecard,handleAddtoCart }) => {

    const { name, position } = bottlecard;


    const teamStyle = {

        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '16px',
    }


    return (
        <div style={teamStyle}>
            <h2>{name}</h2>
            <button className='btn border-t-neutral-800' onClick={() => handleAddtoCart()}>Purchase</button>


            <div>
                <button className='btn border-t-neutral-800' >Purchase</button>
            </div>
        </div>
    );
};

export default BottlesCard;