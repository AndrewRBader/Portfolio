function Footer(){
    return(
        <>
            <section className = "Academic-Work Background">
                <div className = "resume-page-button">
                    <button>Resume</button>
                </div>
                <div className = "linkedin-link">
                    <h3 id = "linkedin-link">LinkedIn</h3>
                </div>
            </section>
            <section className = "projects">
                <div className = "project-page-button">
                    <button>Projects</button>
                </div>
                <div className = "github-link">
                    <h3 id = "github-link">GitHub</h3>
                </div>
            </section>
            <section className = "publications">
                <div className = "publications-page-button">
                    <button>Publications</button>
                </div>
                <div className = "googleScholar-link">
                    <h3 id = "googleScholar-link">Google Scholar</h3>
                </div>
            </section>
        </>
    )
}

export default Footer;