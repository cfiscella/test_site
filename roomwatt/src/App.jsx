import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // ✅ Fixed
import Home from './Pages/Home.jsx';
import { Layout } from './Layout.jsx';

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test Loose
        </p>
      </div>
      <p className="read-the-docs">
      </p>
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