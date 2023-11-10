import './Footer.css';

function Footer(props) {
    const {logo, title} = props;
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src={logo} alt="Logo" width="30" height="30" />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">© 2023 {title}</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="https://twitter.com" target="_blank">
                            <i className="bi-twitter"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://facebook.com" target="_blank">
                            <i className="bi-facebook"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="https://instagram.com" target="_blank">
                            <i className="bi-instagram"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
