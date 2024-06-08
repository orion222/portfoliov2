import "../../styles/WorkList.css";
import PROJECTS from "../../data/projects.json";
import { useState } from 'react';
export default function WorkList(props) {

  const [hovering, setHovering] = useState(false);
  console.log(props.proj);
  return (
    <div className="work-scroll">
      {PROJECTS.map((value, idx) => {
        return (
          <div
            className= {"project-box " + (idx === props.proj && !hovering ? "project-box-active": "")}
            onClick={() => {props.setProj(idx); setHovering(false)}}
            onMouseEnter={() => idx !== props.proj ? setHovering(true):""}
            onMouseLeave={() => idx !== props.proj ? setHovering(false):''}
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
