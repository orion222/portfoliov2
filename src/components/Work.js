import "../styles/Work.css"
import PROJECTS from "../data/projects.json"
import Project from "./Project.js"
import Back from "./BackButton.js"
import { useState } from 'react';

export default function Work(){
    const [page, setPage] = useState(0);

    return (
        <div className = "">
            <Back url = "/"/>
            <div className = "work-container">
                <div className="work-menu appear">
                    <div className="projects">
                        {
                            PROJECTS.map((val, i) => {
                                return <div className={(i === page) ? "project project-active": "project project-inactive"} key = {i} onClick = {() => {setPage(i)}}>
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
        </div>
    )
}