import React from 'react'

const Home = () => {
  return (
    <div>
      <div>Home page</div>
      <div className='flex gap-30'>
        <link to ='/Photos'>
        <button className='border-2 p-2 rounded-2xl text-black'>Photos</button>
        </link>

        <link to ='/Comments'>
        <button className='border-2 p-2 rounded-2xl text-black'>Comments</button>
        </link>

        <link to ='/Albums'>
        <button className='border-2 p-2 rounded-2xl text-black'>Albums</button>
        </link>

        <link to ='/Photos'>
        <button className='border-2 p-2 rounded-2xl text-black'>Photos</button>
        </link>

        <link to ='/Todos'>
        <button className='border-2 p-2 rounded-2xl text-black'>Todos</button>
        </link>

        <link to ='/Users'>
        <button className='border-2 p-2 rounded-2xl text-black'>Users</button>
        </link>

      </div>

    </div>
  )
}

export default Home
