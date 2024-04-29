
import Work from './components/Work'
import './App.css';
import Landing from './components/Landing'
import Other from './components/Other'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing/>}/> 
        <Route path = "/work" element = {<Work/>}/>
        <Route path = "/other" element ={<Other/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
