import logo from "../static/images/synth_logo.png"

const Header = () => {
    return (
        <header>
            <nav>
                <img id="logo"src={logo} />
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

