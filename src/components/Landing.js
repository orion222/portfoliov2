import "../styles/Landing.css";
import Arrow from "./Arrow";
import Scroller from "./Scroller"

import { useState } from 'react'
export default function Landing() {

  const [page, setPage] = useState(0);
  
  function handleClick(){
    console.log("hi");
    setPage((page + 1) % 3);
  }


  return (
    <div className="container">
      <div className="menu">
        <div className="card">
          <div className="name">Orion Chen.</div>
          <div className="subtitle">UOFT Computer Science and Web Dev</div>
          <Scroller page = {page}/>
          <div>
            <div onClick = {handleClick} style={{display: "flex", float: "right"}}>
              <Arrow/>
            </div>
          </div>
        </div>
        <div className="nav">
          <div className="nav-item">
            <a href="/projects" className="nav-link">
              WORK
            </a>
          </div>
          <div className="nav-item">
            <a href="/blog" className="nav-link">
              NOTES
            </a>
          </div>
          <div className="nav-item">
            <a href="/other" className="nav-link">
              OTHER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
