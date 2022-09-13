import React from 'react';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Comedy from './components/Comedy';
import Drama from './components/Drama';
import Home from './components/Home';
import Fantasy from './components/Fantasy';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';
import Kids from './components/Kids';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/fantasy" element={<Fantasy/>}></Route>
          <Route path="/kids" element={<Kids/>}></Route>
          <Route path="/drama" element={<Drama/>}></Route>
          <Route path="/comedy" element={<Comedy/>}></Route>
          <Route path="/reviews/:id" element={<Reviews/>}></Route>
          <Route path="/reviews" element={<Reviews/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
