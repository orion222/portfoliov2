import "../../styles/Notes.css";
import Slider from "./Slider";
import { useState, useMemo } from "react";
import NOTES from "../../data/notes.json";
import Back from "../general/BackButton";
import parseArticle from "./parseArticle.js"

function TextPanel() {
  return (
    <div className="text-panel">
      <div className="gazette">
        THE <br /> ORION <br /> GAZETTE
      </div>
      <div className="gazette-p2">
        Scroll through and click a cover to read what it's about
      </div>
    </div>
  );
}

function noteOverview(id) {

  return (
    <div className="overview-container">
      <div className="note-grid">
        <h1 className="note-title grid-content note-id"> #{id < 10 ? "0" + id : id}</h1>
        <h1 className = "note-title">{NOTES[id].title} </h1>
        <span className = "titleandid"> #{id < 10 ? "0" + id : id} {NOTES[id].title} </span>
        <h2>SYNOPSIS</h2>
        <p className="synopsis-content grid-content"> {NOTES[id].synopsis} </p>
        <h2>DATE</h2>
        <p className="grid-content">{NOTES[id].date}</p>
        <h2>PAPER</h2>
        <div className="article grid-content">{parseArticle(NOTES[id].article)}</div>
      </div>
    </div>
  );
}


export default function Notes() {
  const [note, setNote] = useState(-1);
  
  return (
    <div className="notes-container">
      <Back url="." />
      <Slider NOTES={NOTES} setNote={setNote} curNote={note} />
      {note === -1 ? TextPanel() : noteOverview(note)}
    </div>
  );
}
