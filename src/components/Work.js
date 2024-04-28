import "../styles/Work.css"
import PROJECTS from "../data/projects.json"
import Project from "./Project.js"
import { useMemo, useState } from 'react';

export default function Work(){
    console.log(PROJECTS);
    const [page, setPage] = useState(0);
    const proj = useMemo(() =>{
        let t = []
        for (let i = 0; i < PROJECTS.length; i++){
            t.push(<Project data = {PROJECTS[i]} idx = {i}/>);
        }
        return t;
    }, []);
    

    function displayPage(){
        return proj[page];
    }
    return (
        <div className = "container">
            <div className="work-menu">
                <div className="projects">
                    {
                        PROJECTS.map((val, i) => {
                            return <div className="project" key = {i} onClick = {() => setPage(i)}>
                                {val.name}
                            </div>
                        })
                    }
                </div>
                <div className="page">
                {
                    displayPage()
                }
                </div>
            </div>
        </div>
    )
}