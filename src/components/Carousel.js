import React, { useState, useEffect } from "react";
import "../styles/Carousel.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
export const Carousel = ({ slides, page }) => {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        setSlide(0);
        return () => {
            setSlide(0);
    }}, [page]);
    function displaySlides(){
        let arr = []
        for (let i = 0; i < slides.length; i++){
            arr.push(<img src = {slides[i]} alt = "" key = {i} className = {(slide === i) ? "slide": "slide slide-hidden"}></img>);
        }
        return arr;
    }

    function nextSlide (){
        setSlide((slide + 1) % slides.length);
    }
    function prevSlide(){
        if (slide - 1 < 0) setSlide(slides.length - 1);
        else setSlide(slide - 1);
    }

    return (
        <div className="carousel">
            {displaySlides()}
            <BsArrowLeftCircleFill className = "slide-arrow slide-arrow-left" onClick = {prevSlide}/>
            <BsArrowRightCircleFill className = "slide-arrow slide-arrow-right" onClick = {nextSlide}/>
            <span className = "indicators">
                {slides.map((_, idx) => {
                    return <button key = {idx} onClick = {() => setSlide(idx)} className = {(slide === idx) ? "indicator": "indicator indicator-inactive"}></button>
                })}
            </span>
        </div>
    );
}
