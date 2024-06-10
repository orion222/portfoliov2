

import Work from './components/work-page/Work'
import Landing from './components/landing-page/Landing'
import Other from './components/other-page/Other'
import Chess from './components/other-page/Chess'
import Notes from './components/notes-page/Notes'
import NotFound from './components/general/NotFound'
import Ash from './components/general/Ash.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Landing/>}/> 
        <Route exact path = "/work" element = {<Work/>}/>
        <Route exact path = "/other" element ={<Other/>}/>
        <Route exact path = "/other/chess" element = {<Chess/>}/>
        <Route exact path = "/notes" element = {<Notes/>}/>
        <Route exact path = "/ashikka" element = {<Ash/>}/>      
      </Routes>
    </BrowserRouter>

  );
}

export default App;
