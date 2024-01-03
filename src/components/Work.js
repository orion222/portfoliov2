import "../styles/Work.css"
import { useRef, useEffect } from 'react';


export default function Work(){

    const cube = useRef(null);
    const rotatePrism = (e) => {
        console.log(cube);
        cube.current.style.transform = `rotateX(90deg)`;
    };
    return (
        <div className = "container">

            <div className="prism-container" ref = {cube}>
                <div className="prism-face" id="up" onClick= {(e) => rotatePrism(e)}>
                    HI
                </div>
                <div className="prism-face" id="down">
                    BYE
                </div>
            </div>
        </div>
    )
}