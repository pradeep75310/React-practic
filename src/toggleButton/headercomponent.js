import { ABOUT_US, HOME_SCREEN } from "./constant"

function HeaderFile(props){
    const {title , onscreenChange}= props

    function handleClick(event){
        let id =event.target.id
        onscreenChange(id)
    }

    return(

        <header className="mainhedare">
        <section className="logosection">
            <span className="logo">
               <h4>Logo</h4>
            </span>
        </section>
        <section className="title">
        <h3>{title}</h3>
        </section>

        <nav className="navbar">
            <li className="Button-btn">
                <button id={HOME_SCREEN} onClick={handleClick} className="btn">Home</button>
            </li>
            <li className="Button-btn">
                <button id={ABOUT_US} onClick={handleClick} className="btn">About us</button>

            </li>
        </nav>
        </header>
    )
}

export default HeaderFile;