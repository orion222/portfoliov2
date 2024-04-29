import "../styles/Project.css";
import { Carousel } from "./Carousel.js"
export default function Project(props){
    return <div>
        <section>
            <div className="header-label">PROJECT: {props.data.name}</div>
            <div className="header-label">TIME: {props.data.time}</div>
            <div className="header-label">TECHNOLOGY: {props.data.tech}</div>
        </section>
        <section className = "gallery">
            <Carousel page = {props.page} slides = {props.data.slides}/>
        </section>
        
        <section>
            <div className="header-label">OVERVIEW:</div>
            <br></br>
            {props.data.overview}
        </section>

        <section>
            <div className="header-label">LINKS:</div>
            <br></br>
            <a href = {props.data.links}>Github</a>
        </section>
    </div>
}