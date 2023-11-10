// assets
import './NavBar.css';

// components
import CartWidget from "../../components/CartWidget/CartWidget";

function NavBar(props) {
    const {logo, title} = props;
    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" className="logo d-inline-block ms-1 me-3" />
                            {title}
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                                        <li className="bg-secondary border-top"><a className="dropdown-item text-white" href="#">Atlántico</a></li>
                                        <li className="bg-secondary border-top border-bottom"><a className="dropdown-item text-white" href="#">Pacífico</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;
