import React, { useState } from 'react'

const Users = () => {
    const [Fri, user] = useState([])
    function Usernew() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(r => r.json())
            .then(use => user(use))
            .catch(message => console.log(message))
    }
    Usernew()
    return (
        <>
            {
                Fri.map((g) =>
                    <div className=' bg-orange-400 w-120  gap- text-center h-auto my-0.5'>
                        <p>id{g.userId}</p>
                        <p>name{g.id}</p>
                        <p>username{g.title}</p>
                        <p>email{g.completed}</p>
                        <p>address{g.address}</p>
                        <p>street{g.street}</p>
                        <p>suite{g.suite}</p>
                        <p>city{g.city}</p>
                        <p>zipcode{g.zipcode}</p>
                        <p>geo{g.geo}</p>
                        <p>lat{g.lat}</p>
                        <p>lng{g.lng}</p>
                    </div>
                )
            }

        </>
    )
}

export default Users
