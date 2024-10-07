import './navbar.css'

function Navbar () {
    return (
        <header className='header'>
            <nav className='nav container'>
                <div className={"nav__menu"} id="nav-menu">
                    <ul className='nav__list'>
                        <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="/about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="/work" className="nav__link">Work</a></li>
                    </ul>
                    <div className="nav__close" id="nav-close">X</div>
                </div>
                <div className="nav__toggle" id="nav-toggle">Menu</div>
            </nav>
        </header>
    )
}

export default Navbar