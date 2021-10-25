import logo from "../static/images/synth_logo.png"

const Header = () => {
    return (
        <header>
            <nav>
                <img id="logo"src={logo} alt=""/>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

