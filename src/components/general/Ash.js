import "../../styles/Ash.css"
import { useState } from 'react'
import ash1 from "../../images/ash1.jpg"
import ash2 from "../../images/ash2.jpg"
import ash3 from "../../images/ash3.jpg"
import arrow from "../../images/arrow.svg"
let slides = [ash1, ash2, ash3]
export default function Ash(){

    const [slide, setSlide] = useState(0);
    return (
        <div className = "ash-wrapper">
            <h1>Hi Ashikka</h1>
            <div className = "ash-container">
                <img alt = {`Ash${slide}`} className = "ash-slide" src = {slides[slide]}></img>
            </div>
            <img alt = "next" onClick = {() => setSlide((slide + 1) % 3)} className = "arrow" src = {arrow}></img>
        </div>
    )
}