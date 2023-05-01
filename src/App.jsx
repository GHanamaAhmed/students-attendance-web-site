import { useState } from 'react'
import Navbar from './navbar/navbar'
import Header from './header/header'
import ListHeader from './components/listHeader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard/dashboard'
import Rooms from './rooms/rooms'
import CreateRoom from './createRoom/createRoom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='md:grid md:grid-cols-4 md:grid-rows-1 md:h-full'>
          <ListHeader className={"hidden md:block w-fit col-start-1 col-end-2"} />
          <Routes>
            <Route exact path='/Dashboard' element={<Dashboard />} />
            <Route exact path='/Rooms' element={<Rooms />} />
            <Route exact path='/CreateRoom' element={<CreateRoom />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App
