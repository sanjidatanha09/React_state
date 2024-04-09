/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect( () =>{
        fetch('fake.json')
        .then(res =>res.json())
        .then(data =>setBottles(data))
    },[])
    return (
        <div>
            <h2>Bottles here :{bottles.length}</h2>
        </div>
    );
};

export default Bottles;