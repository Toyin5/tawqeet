import "../styles/Header.css"
import logo from "../logo"
function Header() {
    return (
        <div>
            <img src={logo} alt="logo" />
            <span className="header">
                Muaqitah
            </span>
        </div>
    )
}

export default Header
