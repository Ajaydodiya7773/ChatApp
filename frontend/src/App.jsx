import React from 'react'
import SideBar from './Home/Left/SideBar'
import Chats from './Home/Right/Chats'

function App() {
  return (
    <>
      <div className=' flex h-screen'>
        <SideBar/>
        <Chats/>
      </div>
    </>
  )
}

export default App

