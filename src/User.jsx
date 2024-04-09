/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const User = () => {

    const [users, setUsers] = useState([])

    useEffect ( () =>{
        fetch("https://jsonplaceholder.typicode.com/users")

        .then( res => res.json())
        .then(data =>setUsers(data))
    }, [])

  




    return (
        <div>
           
            <div>
                <h3>users : {users.length}</h3>
            </div>


        </div>

        


    );
};

export default User;