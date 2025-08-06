import React, { useState } from 'react'

const Posts = () => {
    const [Set, post] = useState([])
    function postnew() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(r => r.json())
            .then(pos => post(pos))
            .catch(message => console.log(message))
    }
    postnew()
    return (

        <>
            {
                Set.map((a) =>
                    <div className=' bg-red-500 w-120  gap- text-center h-auto my-0.5'>
                        <p>userid{a.userid}</p>
                        <p>id{a.id}</p>
                        <p>title{a.title}</p>
                        <p>body{a.body}</p>

                    </div>
                )

            }
        </>
    )
}

export default Posts
