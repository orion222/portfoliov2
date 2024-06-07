import "../../styles/WorkList.css";
import PROJECTS from "../../data/projects.json";
export default function WorkList() {
  return (
    <div className="work-scroll">
      {PROJECTS.map((value, idx) => {
        return (
          <div className = "project-box">
            <div className="project-date"> {value.time} </div>
            <div className="project-name">{value.name}</div>;
          </div>
        );
      })}
    </div>
  );
}
