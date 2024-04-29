import "../styles/Work.css"
import PROJECTS from "../data/projects.json"
import Project from "./Project.js"
import { useState } from 'react';

export default function Work(){
    const [page, setPage] = useState(0);
    function handlePageChange(newPage) {
        setPage(newPage);
    }

    return (
        <div className = "container">
            <div className="work-menu">
                <div className="projects">
                    {
                        PROJECTS.map((val, i) => {
                            return <div className="project" key = {i} onClick = {() => {console.log("clicked at " + i); handlePageChange(i)}}>
                                {val.name}
                            </div>
                        })
                    }
                </div>
                <div className="page">
                    <Project page = {page} data = {PROJECTS[page]}/>
                </div>
            </div>
        </div>
    )
}