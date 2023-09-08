import React from 'react';
import './style/App.css';
import Hotbar from './components/Hotbar';
import Home from './page/Home.js';
import Task1 from './page/Task1.js';
import Task2 from './page/Task2.js';
import Task3 from './page/Task3.js';
import Task4 from './page/Task4.js';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
<div className='root'>
 
  <BrowserRouter>
  <Hotbar/>
      <Routes Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/task1' element={<Task1/>} />
        <Route path='/task2' element={<Task2/>} />
        <Route path='/task3' element={<Task3/>} />
        <Route path='/task4' element={<Task4/>} />
      </Routes>
  </BrowserRouter>

</div>

  );
}

export default App;
