import "../../styles/Landing.css";
import orion from "../../images/orionportrait.jpg"

export default function Landing() {
  const links = ["WORK", "NOTES", "OTHER"]  
  function displayLinks(){
    let ret = []
    for (let i = 0; i < links.length; i++){
      ret.push(<div className="nav-item noselect blurred" key = {i}>
        <a href={"/portfoliov2/" + links[i].toLowerCase()} className="nav-link">
          {links[i]}
        </a>
      </div>);
    }
    return ret;
  }

  return (
    <div className="container">
      <div className="menu">
        <div className="card appear centered-column">
            
          <div className="name">Orion Chen.</div>
          <div className="subtitle">UOFT Computer Science</div>

          <div className="hero">
            <img alt = "orion" src = {orion} className="card-image"/>
            <div className="my-links">
              <div className="link">
                <a
                  
                  target="blank"
                  href="https://www.linkedin.com/in/orion-chen-ab66872a1/"
                >
                  <i className ="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="link">
                <a
                  target="blank"
                  href="https://github.com/orion222"
                >
                  <i className ="fa-brands fa-square-github"></i>
                </a>
              </div>
              <div className="link">
                <a
                  target="blank"
                  href="mailto:orion.chen@hotmail.com"
                >
                  <i className ="fa-solid fa-envelope"></i>
                </a>
              </div>
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
