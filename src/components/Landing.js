import "../styles/Landing.css"

export default function Landing(){


    return (
        <div className="container">
            <div className="menu">
                <div className="hero">
                    ORION
                    <div className="card">
                        <div className="card-image">
                        </div>
                        <div className="card-text">
                            Hi, I’m Orion.
                            <br></br><br></br>
                            I enjoy building front-end designs
                            and solving coding problems.
                            <br></br><br></br>
                            I am currently at University of 
                            Toronto studying Computer Science.
                        </div>
                        <div className="last-name">
                            CHEN
                        </div>
                    </div>
                    
                </div>
                <div className="nav">
                    <div className="nav-item">
                        <a href = "/projects" className="nav-link">
                            WORK
                        </a>
                    </div>
                    <div className="nav-item">
                        <a href = "/blog" className="nav-link">
                            NOTES
                        </a>
                    </div>
                    <div className="nav-item">

                    <a href = "/other" className="nav-link">
                        OTHER
                    </a>

                    </div>
                </div>
            </div>
        </div>
        

    )
}