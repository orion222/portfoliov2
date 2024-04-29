import "../styles/Landing.css";
import Arrow from "./Arrow";
import Scroller from "./Scroller"

import { useState } from 'react'

export default function Landing() {
  const links = ["WORK", "NOTES", "OTHER"]
  const [page, setPage] = useState(0);
  
  function handleClick(){
    console.log("hi");
    setPage((page + 1) % 3);
  }

  function displayLinks(){
    let ret = []
    for (let i = 0; i < 3; i++){
      ret.push(<div className="nav-item noselect" key = {i}>
        <a href={"/" + links[i].toLowerCase()} className="nav-link">
          {links[i]}
        </a>
      </div>);
    }
    return ret;
  }

  return (
    <div className="container">
      <div className="menu">
        <div className="card">
          <div className="name">Orion Chen.</div>
          <div className="subtitle">UOFT Computer Science</div>
          <Scroller page = {page}/>
          <div>
            <div onClick = {handleClick} style={{display: "flex", float: "right"}}>
              <Arrow/>
            </div>
          </div>
        </div>
        <div className="nav">
          {displayLinks()}
        </div>
      </div>
    </div>
  );
}
