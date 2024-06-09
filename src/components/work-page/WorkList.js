import "../../styles/WorkList.css";
import PROJECTS from "../../data/projects.json";
import { useState } from 'react';
export default function WorkList(props) {

  const [hovering, setHovering] = useState(false);
  return (
    <div className="work-scroll">
      {PROJECTS.map((value, idx) => {
        return (
          <div
            className= {"project-box " + (idx === props.proj && !hovering ? "project-box-active": "")}
            onClick={() => {props.setProj(idx); setHovering(false); window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => idx !== props.proj ? setHovering(true):""}
            onMouseLeave={() => idx !== props.proj ? setHovering(false):''}
            key = {idx}
          >
            <div className="project-date"> {value.time} </div>
            <div
              className={
                "project-name " +
                (idx === props.proj && !hovering ? "project-name-active" : "")
              }
            >
              {value.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
