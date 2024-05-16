
import Work from './components/Work'
import './App.css';
import Landing from './components/Landing'
import Other from './components/Other'
import Chess from './components/Chess'
import Notes from './components/Notes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing/>}/> 
        <Route path = "/work" element = {<Work/>}/>
        <Route path = "/other" element ={<Other/>}/>
        <Route path = "/other/chess" element = {<Chess/>}/>
        <Route path = "/notes" element = {<Notes/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
