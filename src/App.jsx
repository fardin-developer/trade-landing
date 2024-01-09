import { useState } from 'react'
import Home from './Home';
import './App.css'
import Nav from './component/Nav';
import React from 'react';


import {
  BrowserRouter as Router, Routes,  Route,  Link,} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
   <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
