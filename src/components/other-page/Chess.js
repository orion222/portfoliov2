import "../../styles/Chess.css"
import GAMES from "../../data/chess.json";
import { useState } from 'react';
import { FaArrowAltCircleRight , FaArrowAltCircleLeft  } from "react-icons/fa";
import Back from "../general/BackButton";

export default function Chess(){
    const [game, setGame] = useState(0);
    let gameID = GAMES[game].gameID;
    let length = GAMES.length;
    function nextGame(){
        setGame((game + 1) % length);
    }
    function prevGame(){
        setGame((game - 1 < 0) ? length - 1: game - 1);
    }

    return (
        <div className = "main">
            <Back url = "/Other"/>
            <h1 className = "chess-header">Brilliancies 👽</h1>
            <div className = "board">
                <FaArrowAltCircleLeft onClick = {() => prevGame()} className = "chess-arrow chess-arrow-left"/>
                <FaArrowAltCircleRight  onClick = {() => nextGame()} className = "chess-arrow chess-arrow-right"/>
                <iframe autoFcous title = {gameID} id= {gameID} allowtransparency="true" frameborder="0"  src={"//www.chess.com/emboard?id=" + gameID}>

                </iframe>
            </div>
        </div>
    );
}