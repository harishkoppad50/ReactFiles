import React, { useState } from 'react'

const Comments = () => {
  const [geta, comment] = useState([])
  function fetchapi() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(r => r.json())
      .then(prj => comment(prj))
      .catch(message => console.log(message))
  }

  fetchapi()
  return (
    <>
      {
        geta.map((e) =>
          <div className='bg-amber-300 w-120  gap- text-center h-auto my-0.5'>
            <p>postId{e.postId}</p>
            <p>Id{e.Id}</p>
            <p>name{e.name}</p>
            <p>email{e.email}</p>
            <p>body{e.body}</p>
          </div>
        )
      }
    </>
  )
}



export default Comments
