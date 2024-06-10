import "../../styles/Other.css"
import Back from "../general/BackButton"
export default function Other(){

    return (
        <div className = "other-container">
            <Back class = "blurred-fast"/>
            <h1 className = "other-header appear-fast">Other</h1>
            <ul className = "other-ul blurred-fast">
                <a href = "/portfoliov2/other/chess">               
                    <li className = "other-link">
                        Chess
                    </li>
                </a>
            </ul>
        </div>
    );
}