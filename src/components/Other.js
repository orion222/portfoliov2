import "../styles/Other.css"
import GAMES from "../data/chess.json";
import { useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function Other(){
    const [game, setGame] = useState(0);
    let gameID = GAMES[game].gameID;


    return (
        <div className = "main">
            <div className = "board">
                    <FaArrowLeftLong className = "chess-arrow slide-arrow-left"/>
                    <FaArrowRightLong className = "chess-arrow slide-arrow-right"/>
                <iframe title = {gameID} id= {gameID} allowtransparency="true" frameborder="0"  src={"//www.chess.com/emboard?id=" + gameID}>

                </iframe>
            </div>
        </div>
    );
}