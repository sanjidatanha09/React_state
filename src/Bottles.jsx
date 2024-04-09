/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import BottlesCard from './BottlesCard';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('fake.json')
        .then(res =>res.json())
        .then(data =>setBottles(data))
    },[])
    // dfd

    const handleAddCart = bottle =>{
        // console.log("added");
        // console.log(bottle)

        const newCart = [...cart,bottle]
        console.log(newCart);
        setCart(newCart)
    }

    return (
        <div>
            <h2>Bottles here :{bottles.length}</h2>
            <h2>cart added :{cart.length}</h2>


            <div className='grid grid-cols-3'>
                {
                    bottles.map(bottle => <BottlesCard key={bottle.id} bottlecard={bottle}
                        handleAddtoCart={handleAddCart}
                    ></BottlesCard>)
                }

            </div>

            {/* const getStoraedCard = () =>{
                const storedCartString = localStorage.getItem('cart');
                if(storedCartString){
                    return JSON.parse(storedCartString)
                }
                return [];
            } */}
            
        </div>
    );
};

export default Bottles;