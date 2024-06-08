import WorkList from "./WorkList"
import Project from "./Project"
import "../../styles/Work.css"

import { useState } from 'react'

import PROJECTS from "../../data/projects.json"
import cuphead from "../../images/cuphead.gif"
export default function Work2(){

    const [proj, setProj] = useState(-1);

    const displayProj = () => {
        if (proj === -1) {
            return <div className = "work-hero">
            <div className = "work-title">
                WORK
            </div>
            <img className= "cuphead" src = {cuphead}></img>
            <div className = "work-subtitle">Scroll through and click to view a project</div>
        </div>
        }
        else return <Project data = {PROJECTS[proj]}/>
    }
    return (
        <div className = "work-container">
            {displayProj(proj)}
            <WorkList proj = {proj} setProj = {setProj}/>
        </div>
    )
}