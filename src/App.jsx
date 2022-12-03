import React from 'react'
import Index from './pages/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lowongan from './pages/Lowongan';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Index />} />
          <Route path='/lowongan' element={<Lowongan />} />
          <Route path='/login' element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
