import "../styles/Scroller.css";

export default function Scroller(props) {
  function display() {
    if (props.page === 0) {
      return (
        <div className="hero">
          <div className="card-image" />
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
      );
    } else if (props.page === 1) return displayBlurb();
  }

  function displayBlurb() {
    return (
      <div className="card-text">
        Hi, I'm Orion.
        <br></br>
        <br></br>I am an aspiring software developer with big ideas and always
        looking for the next opportunity to learn. I have great experience with
        React, Javascript, Java, Python, and C.
      </div>
    );
  }
  return <div className="scroller">{display()}</div>;
}
