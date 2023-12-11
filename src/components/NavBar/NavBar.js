// router
import {Link, NavLink} from "react-router-dom";

// assets
import './NavBar.css';

// components
import CartWidget from "../../components/CartWidget/CartWidget";

function NavBar(props) {
    const {logo, title, categories} = props;

    function setActive(isActive, originalClass) {
        let newClass = originalClass;
        if(isActive)
            newClass += " active";
        return newClass;
    }

    return (
        <div className="container">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="Logo" className="logo d-inline-block ms-1 me-3" />
                            {title}
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className={setActive(NavLink.isActive, "nav-link")}>Home</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                                        <li className="bg-secondary border-top">
                                            <NavLink to="/" className={setActive(NavLink.isActive, "dropdown-item text-white")}>Todos</NavLink>
                                        </li>
                                        {categories.map(category => <li key={category.id} className="bg-secondary border-top"><NavLink to={`/category/${category.urlName}`} className={setActive(NavLink.isActive, "dropdown-item text-white")}>{category.name}</NavLink></li>)}
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
