import React, { useState } from 'react'

const Todos = () => {
    const [Thu, todo] = useState([])
    function Todonew() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(r => r.json())
            .then(tod => todo(tod))
            .catch(message => console.log(message))
    }
    Todonew()
    return (
        <>
            {
                Thu.map((f) =>
                    <div className=' bg-blue-600 w-120  gap- text-center h-35 my-0.5'>
                        <p>userId{f.userId}</p>
                        <p>id{f.id}</p>
                        <p>title{f.title}</p>
                        <p>completed{f.completed}</p>
                    </div>
                )

            }

        </>
    )
}

export default Todos
