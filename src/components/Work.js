import "../styles/Work.css"
import { PROJECTS } from "../data/projects.json"
import Project from "./Project.js"
import { useRef, useState } from 'react';

export default function Work(){

    const [page, setPage] = useState(0);
    let proj = [];
    for (let i = 0; i < PROJECTS.pages.length; i++){
        proj.push(<Project data = {PROJECTS} idx = {i}/>);
    }

    function displayPage(){
        return proj[page];
    }
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
                {
                    displayPage()
                }
            </div>
        </div>
    )
}