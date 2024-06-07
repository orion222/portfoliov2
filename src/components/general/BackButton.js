import { IoCaretBack } from "react-icons/io5";
import { useState } from 'react'
export default function BackButton(props){
    const [hover, setHover] = useState(false)
    return <a href = {props.url}>
        <div className = {props.class} style={box} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <IoCaretBack style = {(hover) ? {...buttonStyles, color: "grey"}: buttonStyles}/>
            <p style={(hover) ? {...font, color: "grey"}: font}>Back?</p>
        </div>
    </a>
}
const buttonStyles = {
    width: "2rem",
    height: "2rem",
    color: "#ced4da",
    padding: "0 0"
}
const box = {
    position: "absolute",
    left: "1rem",
    top: "1rem",
    color: "#ced4da",
    display: "flex",
}
const font = {
    fontSize: "2vw",
    fontFamily: "Monospace"
}