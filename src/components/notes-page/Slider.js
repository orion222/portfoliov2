import "../../styles/Notes.css"
import NOTES from "../../data/notes.json"
export default function Slider(){

   
    return <div className = "slider-container">
        <div className = "slider-wrapper">
            <div className = "slider-list">
            {
                NOTES.map((val, idx) => {
                    return <div className = "blog-card">
                            <div className = "blog-title"> {val.title} </div>
                            <img src = {val.cover} alt = {`blog ${idx}`} key = {idx}/>
                    </div>
                })
            }
            </div>
        </div>
    </div>
}