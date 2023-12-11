// router
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <p className="fs-3 my-5"><span className="text-danger">Error</span></p>
                <p className="lead">No encontramos lo que buscás...</p>
                <Link to="/" className="btn btn-primary">Home</Link>
            </div>
        </div>
    );
}

export default Error;
