

import Work from './components/work-page/Work'
import Landing from './components/landing-page/Landing'
import Other from './components/other-page/Other'
import Chess from './components/other-page/Chess'
import Notes from './components/notes-page/Notes'
import NotFound from './components/general/NotFound'
import Work2 from './components/work-page/Work2'
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
        <Route path = "/test" element = {<Work2/>}></Route>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
