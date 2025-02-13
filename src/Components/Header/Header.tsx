import "./Header.scss";

function Header() {
    return(
        <header className="header">
            <h1 className="h1">My website</h1>
            <nav className="nav">
                <ul className="lista">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
         </header>
    )
}

export default Header