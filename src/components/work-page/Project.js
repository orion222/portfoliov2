import "../../styles/Project.css";
import { Carousel } from "../general/Carousel.js"
import parseText from "../general/parseText.js"
export default function Project(props){
    console.log(props.data.name + " loaded");
    return <div className = "project-container">
        <section>
            <div className="header-label">PROJECT: {props.data.name}</div>
            <div className="header-label">TIME: {props.data.time}</div>
            <div className="header-label">TECHNOLOGY: {props.data.tech}</div>
        </section>
        <section className = "gallery">
            <Carousel prefix = "images/projects/" slides = {props.data.slides}/>
        </section>
        
        <section>
            <div className="header-label">OVERVIEW:</div>
            <br></br>
            {parseText(props.data.overview)}
        </section>

        <section>
            <div className="header-label">LINKS:</div>
            <br></br>
            <a target = "_blank"  rel="noreferrer" href = {props.data.links}>Github</a>
        </section>
    </div>
}