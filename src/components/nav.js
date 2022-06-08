import '../styles/navStyles.css'

function Nav(){
    return(
        <>
            <main id = "nav-main">
                <span className = "frameworks-tech nav-span">
                    <a><button class = "nav-button">Apps with Different Frameworks</button></a>
                </span>
                <span className = "open-source-projects nav-span">
                    <a><button class = "nav-button">Open Source Projects</button></a>
                </span>
                <span className = "game-apps nav-span">
                    <a><button class = "nav-button">Game Web Apps</button></a>
                </span>
                <span className = "algorithms-playground nav-span">
                    <a href = "https://algorithms-playground-bader.herokuapp.com/" target = "_blank" rel="noreferrer">
                        <button class = "nav-button">Algorithm Playground App</button></a>
                </span>
            </main>
        </>
    )
}

export default Nav;