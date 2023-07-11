import React from 'react';
import './style/App.css';
import Hotbar from './components/Hotbar';
import Home from './page/Home.js';
import Lv1 from './page/Lv1.js';
import Lv2 from './page/Lv2.js';
import Lv3 from './page/Lv3.js';
import Lv4 from './page/Lv4.js';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
<div className='root'>
 
  <BrowserRouter>
  <Hotbar/>
      <Routes Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/lv1' element={<Lv1/>} />
        <Route path='/lv2' element={<Lv2/>} />
        <Route path='/lv3' element={<Lv3/>} />
        <Route path='/lv4' element={<Lv4/>} />
      </Routes>
  </BrowserRouter>

</div>

  );
}

export default App;
