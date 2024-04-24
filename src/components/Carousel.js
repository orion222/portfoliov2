import React from "react";
import "../styles/Project.css"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

export const Carousel = ({ data }) => {
    console.log(data);
    function displaySlides(){
        let arr = []
        for (let i = 0; i < data.slides.length; i++){
            arr.push(<img src = {data.slides[i]} alt = ""></img>);
        }
        return arr;
    }
    return (
        <div className="carousel">
            <BsArrowLeftCircleFill className = "arrow arrow-left"/>
            {displaySlides()}
            <BsArrowRightCircleFill className = "arrow arrow-right"/>
        </div>
    );
}