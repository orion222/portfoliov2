import "../../styles/Slider.css";
export default function Slider(props) {
  const NOTES = props.NOTES;
  return (
    <div className="slider-container" >
      <div className="slider-list">
        {NOTES.map((val, idx) => {
          return (
            <div
              className="blog-card"
              onClick={() => props.setNote(idx)}
              style={{ opacity: props.curNote === idx ? "0.5" : "1" }}
              key = {idx}
            >
              <div className="blog-title"> {val.title} </div>
              <img src={`images/noteCovers/${val.cover}`} alt={`blog ${idx}`} key={idx} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
