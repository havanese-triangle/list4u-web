import logo from "./img.png";

const Header = () => (
    <header className="row">
        <div className="col-md-5">
            <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col-md-7 mt-5 subtitle">
            List 4 U
        </div>
    </header>
)

export default Header;