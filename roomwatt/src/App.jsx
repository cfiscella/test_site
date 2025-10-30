import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // ✅ Fixed
import Home from './Pages/Home.jsx';
import { Layout } from './Layout.jsx';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* pages in here will not have a header */}
          <Route element={<Layout/>}>
            {/* pages in here will have a header */}
            <Route path={"/"} element={<Home/>}/> {/* for example this page will have header & footer */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App