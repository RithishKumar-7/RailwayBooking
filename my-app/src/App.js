import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path ='/' element={<Login/>}/>
    <Route path ='/Signup' element={<Signup/>}/>
    <Route path ='/Login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;