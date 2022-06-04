function Nav(){
    return(
        <>
            <section className = "frameworks-tech">
                <div>
                    <a><button>Apps with Different Frameworks</button></a>
                </div>
            </section>
            <section className = "open-source-projects">
                <div>
                    <a><button>Open Source Projects</button></a>
                </div>
            </section>
            <section className = "game-apps">
                <div>
                    <a><button>Game Web Apps</button></a>
                </div>
            </section>
            <section className = "algorithms-playground">
                <div>
                    <a href = "https://algorithms-playground-bader.herokuapp.com/" target = "_blank" rel="noreferrer">
                        <button>Algorithm Playground App</button></a>
                </div>
            </section>
        </>
    )
}

export default Nav;