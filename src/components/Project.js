import "../styles/Project.css";
import { Carousel } from "./Carousel.js"
export default function Project(props){

    return <div>
        <section>
            <div className="header-label">PROJECT: {props.data.project}</div>
            <div className="header-label">TIME: {props.data.time}</div>
            <div className="header-label">TECHNOLOGY: {props.data.tech}</div>
        </section>

        <Carousel data = {props.data.pages[props.data.idx]}/>
        <img className = "hero-image" src = {props.heroimg} alt = "Hero"></img>
        
        <section>
            Overview:
            <br></br>
            {props.overview}
        </section>

        <section>
            Links:
            <br></br>
            {props.links}
        </section>
    </div>
}