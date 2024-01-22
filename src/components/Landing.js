import "../styles/Landing.css";
import Arrow from "./Arrow";

export default function Landing() {
    window.addEventListener("DOMContentLoaded", (event) => {
        const element = document.getElementById("arrow");
        element.addEventListener("click",function(){
            console.log("hi");
        });
    });
  return (
    <div className="container">
      <div className="menu">
        <div className="card">
          <div className="name">Orion Chen.</div>
          <div className="subtitle">UOFT Computer Science and Web Dev</div>
          <div className="scroller">
            <div className="card-image"></div>
          </div>
          <div>
            <Arrow/>
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
