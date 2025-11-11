import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import { Layout } from './Layout.jsx';
import RoomPage from './Pages/RoomPage.jsx';
import CreateRoomPage from './Pages/CreateRoomPage.jsx';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={"/createroom/"} element={<CreateRoomPage />} />
          {/* pages in here will not have a header */}
          <Route element={<Layout/>}>
            {/* pages in here will have a header */}
            <Route path={"/"} element={<Home/>}/> {/* for example this page will have header & footer */}
            <Route path="/rooms/" element={<RoomPage />} /> {/* new route */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App