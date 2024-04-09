/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import BottlesCard from './BottlesCard';

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect( () =>{
        fetch('fake.json')
        .then(res =>res.json())
        .then(data =>setBottles(data))
    },[])
    // dfd

    const handleAddCart = bottle =>{
        console.log("added");
    }
    return (
        <div>
            <h2>Bottles here :{bottles.length}</h2>

            <div className='grid grid-cols-3'>
                {
                    bottles.map(bottle => <BottlesCard key={bottle.id} bottlecard={bottle}
                        handleAddtoCart={handleAddCart}
                    ></BottlesCard>)
                }

            </div>
            
        </div>
    );
};

export default Bottles;