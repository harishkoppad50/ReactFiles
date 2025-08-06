import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './Comments.jsx'
import Posts from './Posts.jsx'
import Albums from './Albums.jsx'
import Photos from './Photos.jsx'
import Todos from './Todos.jsx'
import Users from './Users.jsx'

function App() {
  
  return (
    <>
      <div className='h-screen gap-3 ml-7 flex flex-wrap'>
        <Router>
          <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Comments' element={<Comments/>}/>
            <Route path='/Posts' element={<Posts/>}/>
            <Route path='/Albums' element={<Albums/>}/>
            <Route path='/Photos' element={<Photos/>}/>
            <Route path='/Todos' element={<Todos/>}/>
            <Route path='/Users' element={<Users/>}/>
         </Routes>
        </Router>
      </div>
    </>
  )
}


export default App
