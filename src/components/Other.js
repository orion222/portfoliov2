import "../styles/Other.css"
import Back from "./BackButton"
export default function Other(){

    return (
        <div className = "other-container">
            <Back url = "/"/>
            <h1 className = "other-header appear">Other</h1>
            <ul className = "blurred">
                <a href = "/other/chess">               
                    <li>
                        Chess
                    </li>
                </a>
            </ul>
        </div>
    );
}