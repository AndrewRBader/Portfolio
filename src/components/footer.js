import '../styles/footerStyles.css';

function Footer(){
    return(
        <>
            <main id = "footer">
                <span className = "academic-professional-background">
                    <button className = "footer-button">Resume</button>
                    <a class = "linkedin link">LinkedIn</a>
                </span>
                <span className = "projects">
                    <button className = "footer-button">Projects</button>
                    <a class = "github link">GitHub</a>
                </span>
                <span className = "publications">
                    <button className = "footer-button">Publications</button>
                    <a class = "google-scholar link">Google Scholar</a>
                </span>
            </main>
        </>
    )
}

export default Footer;