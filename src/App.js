import logo from './logo.svg';
import Work from './components/Work'
import './App.css';
import Landing from './components/Landing';
import PROJECTS from './data/projects.json'
import { Carousel } from './components/Carousel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Landing/>}/> 
        <Route path = "/work" element = {<Work/>}/>
        <Route path = "/test" element ={<Carousel slides = {PROJECTS[0].slides}/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
