import React from 'react'
import Index from './pages/index'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Lowongan from './pages/Lowongan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Index />}/>
          <Route path='/lowongan' element={<Lowongan />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
