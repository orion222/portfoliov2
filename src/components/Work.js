import "../styles/Work.css"
import PROJECTS from "../data/projects.js"
import { useRef, useEffect } from 'react';


export default function Work(){

    return (
        <div className = "container">
            <div className="work-menu">
                <div className="projects">
                    {
                        PROJECTS.names.map((val, i) => {
                            return <div className="project" key = {i}>
                                {val}
                            </div>
                        })
                    }
                </div>
                <div className="page">

                </div>
            </div>

           
        </div>
    )
}