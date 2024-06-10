import WorkList from "./WorkList";
import Project from "./Project";
import Back from "../general/BackButton"
import "../../styles/Work.css";

import { useState } from "react";

import PROJECTS from "../../data/projects.json";
import cupheadWalk from "../../images/cupheadWalk.gif";
import cuphead from "../../images/cuphead.png";
export default function Work() {
  const [proj, setProj] = useState(-1);
  const displayProj = () => {
    if (proj === -1) {
      return (
        <div className="work-hero">
          <div className="work-title">WORK</div>
          <img alt = "cuphead-walk" className="cuphead-walk" src={cupheadWalk}></img>
          <div className="work-subtitle">
            Scroll through and click to view a project
          </div>
        </div>
      );
    } else return <Project data={PROJECTS[proj]} />;
  };
  return (
    <div className = "work-wrapper">
      {(proj === -1) && <Back url = "/" class = "blurred-fast"/>}
      <div className="work-container">
        {(proj > -1) && 
        <img alt="back" className="cuphead" src={cuphead} onClick={() => setProj(-1)}/>}
        {displayProj(proj)}
        <WorkList proj={proj} setProj={setProj} />
      </div>
    </div>
  );
}
