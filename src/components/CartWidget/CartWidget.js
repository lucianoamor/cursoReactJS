// hooks
import {useContext} from 'react';

// router
import {Link} from "react-router-dom";

// context
import {DataContext} from "../../context/CartContext";

// assets
import './CartWidget.css';

function CartWidget() {
    const {cart} = useContext(DataContext);

    return (
        <div className="px-5">
            <Link to="/cart" className="btn btn-primary position-relative">
                <i className="bi-cart text-white"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{cart.quantity}</span>
            </Link>
        </div>
    );
}

export default CartWidget;
