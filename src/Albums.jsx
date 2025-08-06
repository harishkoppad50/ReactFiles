import React, { useState } from 'react'

const Albums = () => {
    const [Tue, Album] = useState([])
    function Albumnew() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(r => r.json())
            .then(Alb => Album(Alb))
            .catch(message => console.log(message))
    }
    Albumnew()
    return (
        <>
            {
                Tue.map((c) =>
                    <div className=' bg-green-400 w-120  gap- text-center h-35 my-0.5'>
                        <p>userId{c.userId}</p>
                        <p>id{c.id}</p>
                        <p>title{c.title}</p>
                    </div>
                )

            }
        </>

    )
}

export default Albums
