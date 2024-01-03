import logo from './logo.svg';
import Work from './components/Work'
import './App.css';
import Landing from './components/Landing';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing/>}/> 
        <Route path = "/projects" element = {<Work/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
