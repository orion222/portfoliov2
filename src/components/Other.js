import "../styles/Other.css"
import Back from "./BackButton"
export default function Other(){

    return (
        <div className = "other-container">
            <Back class = "blurred-fast" url = "/"/>
            <h1 className = "other-header appear-fast">Other</h1>
            <ul className = "blurred-fast">
                <a href = "/other/chess">               
                    <li>
                        Chess
                    </li>
                </a>
            </ul>
        </div>
    );
}