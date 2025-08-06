import React, { useState } from 'react'

const Photos = () => {
    const [wed, photo] = useState([])
    function Photonew() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(r => r.json())
            .then(pho => photo(pho))
            .catch(message => console.log(message))
    }
    Photonew()
    return (

        <>
            {
                wed.map((d) =>
                    <div className=' bg-pink-500 w-120  gap- text-center h-35 my-0.5'>
                        <p>albumId{d.albumId}</p>
                        <p>id{d.id}</p>
                        <p>title{d.title}</p>
                        <p>url{d.url}</p>
                        <p>thumbnailUrl{d.thumbnailUrl}</p>
                    </div>
                )

            }
        </>
    )
}


export default Photos
