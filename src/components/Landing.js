import "../styles/Landing.css"

export default function Landing(){


    return (
        <div className="container">
            <div className="heading">
                <div className="nav">
                    <a href = "/projects" className="navitem">
                        Projects
                    </a>
                    <a href = "/blog" className="navitem">
                        Blog
                    </a>
                    <a href = "/other" className="navitem">
                        Other
                    </a>
                </div>
            </div>

            <div className="hero">
                ORION CHEN
                <div className="subtitle">
                Computer Science student at University of Toronto
                </div>
            </div>

            
        </div>
        

    )
}